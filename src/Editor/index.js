import React from "react";
import EditorActions from "./components/editorActions";
import Editor from "../Utilities/editor";
import Nav from "../Home/components/Nav";
import Toggle from "../Utilities/toggle";

const EditorPage = () => {
  return (
    <div className="editorPageWrapper h-screen ">
      <Nav />
      <div className="editorPageBlock  bg-metal  flex flex-col-reverse  md:flex-row ">
        <div className="actionsWrapper bg-midnight   md:w-1/6">
          <EditorActions />
        </div>
        <div className="editorWrapper md:w-5/6">
          Editor here
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
