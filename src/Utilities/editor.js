import React, { useEffect, useState } from "react";
import { defineTheme } from "./defineTheme";
import { ThemeContext } from "./themeContext";
import ACTIONS from "./userSocketActions";

import Editor from "@monaco-editor/react";

const CodeEditor = ({ language, socketRef, roomId, setEditorCode }) => {
  const { theme } = React.useContext(ThemeContext);
  const [themeObj, setTheme] = useState("cobalt");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (socketRef.current) {
      // Listening to code change event
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          setValue(code);
          setEditorCode(code);
        }
        console.log("receieving", code);
      });
    }
  }, [socketRef.current]);

  const handleEditorChange = (val) => {
    setValue(val);
    setEditorCode(val);
    socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code: val });
  };

  useEffect(() => {
    let themeVar = "";
    if (theme === "dark") {
      themeVar = "brilliance-black";
    } else {
      themeVar = "xcode-default";
    }

    defineTheme(themeVar).then((_) => setTheme(themeVar));
  }, [theme]);

  return (
    <div className="overlay rounded-md overflow-hidden h-full shadow-4xl">
      <Editor
        height="70vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={themeObj}
        defaultValue="// some comment"
        onChange={(val) => {
          handleEditorChange(val);
        }}
      />
    </div>
  );
};

export default CodeEditor;
