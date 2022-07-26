import React, { useState } from "react";
import CodeEditor from "../../Utilities/editor";
import { languageOptions } from "../../Utilities/languageOptions";
import { CompileAndRun } from "../editorAction";
import atob from "atob";
import "./editorComponent.css";
import ACTIONS from "../../Utilities/userSocketActions";

const EditorComponent = ({ socketRef, roomId }) => {
  const [lang, setLang] = useState({
    id: 63,
    label: "JavaScript (Node.js 12.14.0)",
    name: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
  });
  const [editorCode, setEditorCode] = useState();

  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState("");
  const [outputColor, setOutputColor] = useState("light-hover");

  const handleCompile = async () => {
    setLoader(true);

    let response = await CompileAndRun({
      LangId: lang.id,
      code: editorCode,
      input: "",
    });
    let statusId = response?.status?.id;
    if (statusId === 6) {
      setResult(atob(response?.compile_output));
      setOutputColor("output-error");
    } else if (statusId === 3) {
      setResult(atob(response.stdout) !== null ? atob(response.stdout) : null);
      setOutputColor("output-green");
    } else if (statusId === 5) {
      setResult(`Time Limit Exceeded`);
      setOutputColor("output-error");
    } else {
      setResult(atob(response?.stderr));
      setOutputColor("output-error");
    }
    setLoader(false);
  };
  return (
    <div className="shadow dark:shadow-dark-accent rounded ml-1">
      <div>
        <div className="langDropDown rounded-t p-1 w-22 bg-light-accent dark:bg-dark-accent">
          <select
            className="align-middle p-0 m-0 outline-none  border-2 border-light-accent  text-light-call-sec text-sm md:text-lg rounded-lg focus:light-call-sec focus:border-light-call-sec focus:ring-light-call-sec block   dark:bg-dark-bg dark:border-dark-accent dark:placeholder-dark-call-sec dark:text-dark-call-sec dark:focus:ring-dark-accent dark:focus:border-dark-accent w-64 "
            onChange={(e) => {
              let index = parseInt(e.target.value);
              console.log(index);
              setLang(languageOptions[index]);
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
      </div>
      <div className="editorFunctionContainer  md:flex">
        <div className="my-1 md:w-4/6">
          <CodeEditor
            language={lang.value}
            socketRef={socketRef ? socketRef : ""}
            roomId={roomId ? roomId : ""}
            setEditorCode={(val) => {
              setEditorCode(val);
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
          <div className="flex justify-center md:justify-end py-5 px-2">
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
  );
};

export default EditorComponent;