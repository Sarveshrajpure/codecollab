import React from "react";
import EditorActions from "./components/editorActions";
import EditorComponent from "./components/editorComponent";
import Nav from "../Home/components/Nav";
import Toggle from "../Utilities/toggle";

const EditorPage = () => {
  return (
    <div className="editorPageWrapper md:h-screen ">
      <Nav />
      <div className="editorPageBlock   flex flex-col-reverse  md:flex-row ">
        <div className="actionsWrapper   md:w-48">
          <EditorActions />
        </div>
        <div className="editorWrapper md:w-5/6">
          <EditorComponent />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
