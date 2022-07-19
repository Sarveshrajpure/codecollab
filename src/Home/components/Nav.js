import React from "react";
import mm_logo from "../../assests/cc_logo.png";
import Toggle from "../../Utilities/toggle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

const Nav = (isHomePage) => {
  const navigate = useNavigate();

  const user = useSelector((state) =>
    state.User.user_verification.user.firstname
      ? state.User.user_verification.user
      : ""
  );

  function capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  const navigateTo = async () => {
    if (user) {
      navigate("/dashboard/dashboardhome");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="navWrapper">
      <div className="navBlock px-6 md:px-12 lg:px-4 py-1 flex justify-between items-center ">
        <div
          className=" flex  cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            className=" w-2/6  md:w-2/3 lg:w-4/12 "
            src={mm_logo}
            alt="logo"
          />
        </div>
        {isHomePage.isHomePage === true ? (
          <div
            className="goToLoginBtn 
         text-lg   md:text-xl  lg:text-xl "
            onClick={() => {
              navigateTo();
            }}
          >
            {user ? capitalizeFirstLetter(user.firstname) : "Login"}
          </div>
        ) : (
          ""
        )}
        <div>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
