import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import EditorActions from "./components/editorActions";
import EditorComponent from "./components/editorComponent";
import Nav from "../Home/components/Nav";
import { initSocket } from "../Utilities/socket";
import ACTIONS from "../Utilities/userSocketActions";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditorPage = () => {
  const socketRef = useRef(null);
  const navigate = useNavigate();
  const { roomId } = useParams();
  const username = useSelector((state) =>
    state.User.loginInfo.user.firstName
      ? state.User.loginInfo.user.firstName
      : ""
  );

  const [clients, setClients] = useState("");

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
        userName: username,
      });

      // Listening for joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, userName, socketId }) => {
          if (userName !== username) {
            toast.success(`${userName} joined the room.`);
          }
          setClients(clients);
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
  }, []);

  console.log("clients:", clients);
  return (
    <div className="editorPageWrapper md:h-screen ">
      <Nav />
      <div className="editorPageBlock   flex flex-col-reverse  md:flex-row ">
        <div className="actionsWrapper   md:w-48">
          <EditorActions clients={clients} />
        </div>
        <div className="editorWrapper md:w-5/6">
          <EditorComponent socketRef={socketRef} roomId={roomId} />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
