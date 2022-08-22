import React, { useEffect, useState } from "react";
import { defineTheme } from "./defineTheme";
import { ThemeContext } from "./themeContext";
import ACTIONS from "./userSocketActions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import atob from "atob";

import Editor from "@monaco-editor/react";

const CodeEditor = ({
  language,
  socketRef,
  roomId,
  setEditorCode,
  isFile,
  fileContent,
}) => {
  const { theme } = React.useContext(ThemeContext);
  const [themeObj, setTheme] = useState("cobalt");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isFile === "true") {
      setValue(atob(fileContent));
      setEditorCode(atob(fileContent));
    }
  }, []);

  useEffect(() => {
    if (socketRef.current) {
      // Listening to code change event
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          setValue(code);
          setEditorCode(code);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  let options = {
    minimap: {
      enabled: false,
    },
  };

  return (
    <div className="overlay rounded-md overflow-hidden h-full shadow-4xl">
      <Editor
        height="48vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={themeObj}
        options={options}
        defaultValue="//lets Collaborate 👨🏼‍💻"
        onChange={(val) => {
          handleEditorChange(val);
        }}
      />
    </div>
  );
};

export default CodeEditor;
