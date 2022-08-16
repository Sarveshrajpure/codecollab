import React from "react";
import LoginForm from "./components/LoginForm";
import lines_3 from "../assests/lines-3.svg";
import lines_4 from "../assests/lines-4.svg";
import "./login.css";

const Login = () => {
  return (
    <div className="loginWrapper ">
      {" "}
      <div className="flex max-w-screen">
        <div className="md:w-1/2  absolute -left-4 top-3/4 md:top-1/3 md:-left-8 ">
          <img src={lines_3} alt="" className="w-4/5 mt-10 md:mt-14" />
        </div>
        <div className="md:w-1/2 absolute  top-10 -right-0 pl-60  flex justify-end ">
          <img src={lines_4} alt="" className="w-2/4 mt-3" />
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
