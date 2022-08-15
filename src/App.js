import React from "react";
import { Routes, Route } from "react-router-dom";
import PreventSigninRoute from "./Utilities/preventSignRoute";
import PrivateRoute from "./Utilities/PrivateRoute";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import EditorPage from "./Editor";
import WorkSpacePage from "./WorkSpacePage";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { ThemeContext } from "./Utilities/themeContext";
function App() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="bg-white dark:bg-dark-bg min-h-screen">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: theme === "dark" ? "#24242B" : "#FFFFFF",
            color: theme === "dark" ? "#FFFFFF" : "#5063F0",
          },
        }}
      ></Toaster>

      <Routes>
        <Route path="/" element={<PreventSigninRoute />}>
          <Route exact path="" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route
            exact
            path="/editor/:roomId/:isFile"
            element={<EditorPage />}
          />
          <Route exact path="/workspaces" element={<WorkSpacePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
