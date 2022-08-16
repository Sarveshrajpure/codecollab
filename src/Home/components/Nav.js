import React, { useState } from "react";
import mm_logo from "../../assests/cc_logo.png";
import Toggle from "../../Utilities/toggle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";
import NavModal from "../../modals/components/navModal";

const Nav = (isHomePage) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const user = useSelector((state) =>
    state.User.loginInfo.user.firstName ? state.User.loginInfo.user : ""
  );

  function capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  const navigateTo = async () => {
    if (user) {
      setOpenModal((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  console.log(user.firstName);
  return (
    <div className="navWrapper">
      <div className="navBlock   px-6 md:px-12 lg:px-4  flex justify-between items-center ">
        <div
          className=" md:w-5/6 flex  cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        >
          <img className=" w-1/4  md:w-20 " src={mm_logo} alt="logo" pb-1 />
        </div>

        <div
          className="goToLoginBtn  px-4 py-1 mr-2 md:mr-0  select-none
         text-sm   md:text-md font-bold text-light-call-sec dark:text-dark-call-sec 
          rounded transition-background-color duration-300  cursor-pointer  hover:bg-light-call-sec
           dark:hover:bg-dark-call-sec hover:text-light-hover dark:hover:text-light-call-sec"
          onClick={() => {
            navigateTo();
          }}
        >
          {user ? capitalizeFirstLetter(user.firstName) : "login"}
        </div>

        <div>
          <Toggle />
        </div>
      </div>
      {openModal ? <NavModal /> : ""}
    </div>
  );
};

export default Nav;
