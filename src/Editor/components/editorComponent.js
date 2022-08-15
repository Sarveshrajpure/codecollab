import React, { useState, useRef, useEffect } from "react";
import CodeEditor from "../../Utilities/editor";
import { languageOptions } from "../../Utilities/languageOptions";
import { CompileAndRun } from "../editorAction";
import { useSelector } from "react-redux";
import atob from "atob";
import OutputDetails from "./outputDetails";
import "./editorComponent.css";
import ACTIONS from "../../Utilities/userSocketActions";
import toast from "react-hot-toast";
import { initSocket } from "../../Utilities/socket";
import { useNavigate } from "react-router-dom";
import Modal from "../../modals";

const EditorComponent = ({ roomId, setClients }) => {
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const langRef = useRef(null);
  const outputRef = useRef(null);
  const navigate = useNavigate();
  const username = useSelector((state) =>
    state.User.loginInfo.user.firstName ? state.User.loginInfo.user : ""
  );
  const [lang, setLang] = useState(
    langRef.current
      ? langRef.current
      : {
          id: 63,
          label: "JavaScript (Node.js 12.14.0)",
          name: "JavaScript (Node.js 12.14.0)",
          value: "javascript",
          extension: "js",
        }
  );
  const [editorCode, setEditorCode] = useState();
  const [response, setResponse] = useState();
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [outputColor, setOutputColor] = useState("light-hover");

  useEffect(() => {
    console.log("in effect");

    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket connection failed, try again later.");
        navigate("/workspaces");
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: username.firstName,
      });

      // Listening for joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, userName, socketId }) => {
          if (userName !== username.firstName) {
            toast.success(`${userName} joined the room.`);
          }
          setClients(clients);
          //syncing code
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          });
          //syncing programming language
          socketRef.current.emit(ACTIONS.SYNC_LANGUAGE, {
            lang: langRef.current,
            socketId,
          });
          //syncing output
          socketRef.current.emit(ACTIONS.SYNC_OUTPUT, {
            output: outputRef.current,
            socketId,
          });
        }
      );

      //Listening for disconnected event

      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
        toast(`${userName} left the room.`, { icon: "🏃" });
        setClients((prev) => {
          return prev.filter((client) => client.socketId !== socketId);
        });
      });
    };
    init();
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //listening to language change
  useEffect(() => {
    if (socketRef.current) {
      // Listening to language change event
      socketRef.current.on(ACTIONS.LANGUAGE_CHANGE, ({ lang, userName }) => {
        if (lang !== null) {
          langRef.current = lang;
          setLang(languageOptions[langRef.current]);

          document.querySelector("#language_Select").value = lang;

          console.log(document.querySelector("#language_Select").value);

          if (userName !== username.firstName) {
            toast.success(
              `${userName} changed language to ${
                languageOptions[langRef.current].value
              }.`,
              { icon: "👨‍💻" }
            );
          }
        }
      });
    }
  }, [socketRef.current]);

  //listening to output change
  useEffect(() => {
    if (socketRef.current) {
      // Listening to output change event
      socketRef.current.on(ACTIONS.OUTPUT_CHANGE, ({ output, userName }) => {
        if (output !== null) {
          outputRef.current = output;
          setResult(output);

          if (userName !== username.firstName) {
            toast.success(`${userName} ran the code.`, { icon: "⚙️" });
          }
        }
      });
    }
  }, [socketRef.current]);

  const handleCompile = async () => {
    setLoader(true);
    if (editorCode) {
      let response = await CompileAndRun({
        LangId: lang.id,
        code: editorCode,
        input: "",
      });

      if (response) {
        setResponse(response);
        console.log(response);
        let statusId = response?.status?.id;
        if (statusId === 6) {
          setResult(atob(response?.compile_output));
          outputRef.current = atob(response?.compile_output);
          socketRef.current.emit(ACTIONS.OUTPUT_CHANGE, {
            roomId,
            output: outputRef.current,
            userName: username.firstName,
          });
          setOutputColor("output-error");
        } else if (statusId === 3) {
          console.log(statusId);
          setResult(
            atob(response.stdout) !== null ? atob(response.stdout) : null
          );
          outputRef.current =
            atob(response.stdout) !== null ? atob(response.stdout) : null;

          socketRef.current.emit(ACTIONS.OUTPUT_CHANGE, {
            roomId,
            output: outputRef.current,
            userName: username.firstName,
          });

          setOutputColor("output-green");
        } else if (statusId === 5) {
          setResult(`Time Limit Exceeded`);
          outputRef.current = `Time Limit Exceeded`;
          socketRef.current.emit(ACTIONS.OUTPUT_CHANGE, {
            roomId,
            output: outputRef.current,
            userName: username.firstName,
          });
          setOutputColor("output-error");
        } else {
          setResult(atob(response?.stderr));
          outputRef.current = atob(response?.stderr);
          socketRef.current.emit(ACTIONS.OUTPUT_CHANGE, {
            roomId,
            output: outputRef.current,
            userName: username.firstName,
          });
          setOutputColor("output-error");
        }
      }
    } else {
      setResult(`Nothing to compile!`);
      setResponse("");
    }
    setLoader(false);
  };

  const handleSave = () => {
    if (editorCode) {
      console.log(editorCode);
      setModalOpen(true);
    }
  };

  return (
    <div className="shadow dark:shadow-dark-accent rounded ml-1">
      <div className="flex justify-between rounded-t p-1 w-22 bg-light-accent dark:bg-dark-accent">
        <div className="langDropDown rounded-t p-1 w-22 bg-light-accent dark:bg-dark-accent">
          <select
            id="language_Select"
            className="align-middle p-0 m-0 outline-none  border-2 border-light-accent  text-light-call-sec text-sm md:text-lg rounded-lg focus:light-call-sec focus:border-light-call-sec focus:ring-light-call-sec block   dark:bg-dark-bg dark:border-dark-accent dark:placeholder-dark-call-sec dark:text-dark-call-sec dark:focus:ring-dark-accent dark:focus:border-dark-accent w-64 "
            onChange={(e) => {
              let index = parseInt(e.target.value);
              setLang(languageOptions[index]);
              langRef.current = index;
              socketRef.current.emit(ACTIONS.LANGUAGE_CHANGE, {
                roomId,
                lang: index,
                userName: username.firstName,
              });
            }}
          >
            {languageOptions.map((ele, i) => {
              return (
                <option value={i} key={i}>
                  {ele.label}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <button
            className=" tracking-wide transition-background-color ease-in duration-200 p-1 pr-3 pl-3 bg-light-call-sec rounded text-center text-m font-semibold text-light-accent cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent"
            onClick={() => {
              editorCode ? handleSave() : toast.error(`Nothing to Save `);
            }}
          >
            Save
          </button>
        </div>
      </div>
      {modalOpen ? (
        <Modal
          editorCode={editorCode}
          langEx={lang.extension}
          setModalOpen={(val) => {
            setModalOpen(val);
          }}
        />
      ) : (
        ""
      )}
      <div className="editorFunctionContainer  md:flex">
        <div className="my-1 md:w-4/6">
          <CodeEditor
            language={lang.value}
            socketRef={socketRef ? socketRef : ""}
            roomId={roomId ? roomId : ""}
            setEditorCode={(val) => {
              setEditorCode(val);
              codeRef.current = val;
            }}
          />
        </div>

        <div className="md:w-2/6 text-light-call-sec dark:text-light-hover ">
          <div className="h-96 ">
            <div className=" border-t-4 md:border-t-0 border-b-4 border-l-4 border-light-accent dark:border-dark-accent md:ml-2  h-3/5">
              <div
                className={`text-l font-semibold p-2  text-${
                  outputColor ? outputColor : "light-hover"
                }`}
              >
                {result && !loader
                  ? result
                  : loader
                  ? "Compiling...."
                  : "Output"}
              </div>
              <div></div>
            </div>
            <div className=" border-l-4 border-light-accent dark:border-dark-accent md:ml-2  h-2/5">
              <textarea
                className=" text-start text-sm font-semibold outline-none text-light-call-sec dark:text-light-hover p-2 bg-light-bg dark:bg-dark-bg h-full w-full "
                placeholder="Custom input"
              />
            </div>
          </div>
          <div className="flex justify-between md:justify-between  px-2">
            <div className="py-2 px-2">
              {result && !loader ? (
                <OutputDetails outputDetails={response} />
              ) : (
                ""
              )}
            </div>
            <div className="py-5">
              <button
                className=" tracking-wide transition-background-color ease-in duration-200 p-2 pr-6 pl-6 bg-light-call-sec rounded text-center text-lg font-semibold text-light-accent cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent"
                onClick={() => {
                  handleCompile();
                }}
              >
                Compile and Run
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorComponent;
