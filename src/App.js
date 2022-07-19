import { Routes, Route } from "react-router-dom";
import PreventSigninRoute from "./Utilities/preventSignRoute";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import EditorPage from "./Editor";
import Profile from "./Profile";
import "./App.css";

function App() {
  return (
    <div className="bg-white dark:bg-tahiti">
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/editor" element={<EditorPage />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
