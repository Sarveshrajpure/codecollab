import React, { useEffect, useRef, useState } from "react";
import { defineTheme } from "./defineTheme";
import { ThemeContext } from "./themeContext";

import Editor from "@monaco-editor/react";

const CodeEditor = ({ socketRef, roomId, onChange, language, code }) => {
  const { theme } = React.useContext(ThemeContext);
  const [themeObj, setTheme] = useState("cobalt");
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange(value);
  };
  console.log(theme);

  useEffect(() => {
    let themeVar = "";
    console.log(theme);
    if (theme === "dark") {
      themeVar = "brilliance-black";
    } else {
      themeVar = "xcode-default";
    }
    console.log("theme...", themeVar);

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
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
