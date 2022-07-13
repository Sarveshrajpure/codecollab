import { Routes, Route } from "react-router-dom";
import PreventSigninRoute from "./Utilities/preventSignRoute";
import Register from "./Register";
import "./App.css";

function App() {
  return (
    <div className="bg-white dark:bg-tahiti">
      <Routes>
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
