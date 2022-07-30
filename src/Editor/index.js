import React, { useState, useRef } from "react";
import EditorActions from "./components/editorActions";
import EditorComponent from "./components/editorComponent";
import Nav from "../Home/components/Nav";
import { useParams } from "react-router-dom";
const EditorPage = () => {
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const [initialCode, setinitialCode] = useState(null);

  const { roomId } = useParams();
  const [clients, setClients] = useState("");
  return (
    <div className="editorPageWrapper md:h-screen ">
      <Nav />
      <div className="editorPageBlock   flex flex-col-reverse  md:flex-row ">
        <div className="actionsWrapper   md:w-48">
          <EditorActions clients={clients} roomId={roomId} />
        </div>
        <div className="editorWrapper md:w-5/6">
          <EditorComponent
            socketRef={socketRef}
            roomId={roomId}
            setInitialCode={(val) => {
              setinitialCode(val);
            }}
            initialCode={initialCode}
            setCodeRef={(val) => {
              codeRef.current = val;
            }}
            codeRef={codeRef.current}
            setClients={(val) => {
              setClients(val);
            }}
            clients={clients}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
