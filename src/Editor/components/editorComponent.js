import React, { useState } from "react";
import CodeEditor from "../../Utilities/editor";
import { languageOptions } from "../../Utilities/languageOptions";
import "./editorComponent.css";

const EditorComponent = () => {
  const [lang, setLang] = useState("");
  const [socketId, setSocketId] = useState("ref123");
  const [roomId, setRoomId] = useState("36536456");
  const [code, setCode] = useState(`const hello=()=>{
console.log("Hello world")
  }`);
  return (
    <div>
      <div className="m-1">
        <div className="langDropDown w-22 ">
          <select
            className="align-middle p-0 m-0 outline-none  border-2 border-light-accent  text-light-call-sec text-sm md:text-lg rounded-lg focus:light-call-sec focus:border-light-call-sec focus:ring-light-call-sec block   dark:bg-dark-bg dark:border-dark-accent dark:placeholder-dark-call-sec dark:text-dark-call-sec dark:focus:ring-dark-accent dark:focus:border-dark-accent w-64 "
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
            }}
          >
            {languageOptions.map((ele, i) => {
              return (
                <option value={ele.value} key={i}>
                  {ele.label}{" "}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="m-2 border-l-8  border-t-8 border-light-accent dark:border-dark-accent">
        <CodeEditor
          socketRef={socketId}
          roomId={roomId}
          language={lang}
          code={code}
        />
      </div>
    </div>
  );
};

export default EditorComponent;
