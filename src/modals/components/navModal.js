import React, { useEffect, useRef } from "react";
import "./navModal.css";
import { useNavigate } from "react-router-dom";
import { userSignOut } from "../../Login/loginAction";
import { useDispatch } from "react-redux/es/exports";
import { signout_user } from "../../Actions/userActions";

const NavModal = ({ closeModal }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let clickOutsidehandler = (event) => {
      if (!ref.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", clickOutsidehandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsidehandler);
    };
  }, []);

  const handleLogout = () => {
    userSignOut();
    dispatch(signout_user());
    navigate("/");
  };

  const WorkspaceClick = () => {
    navigate("/workspaces");
  };
  return (
    <div
      className="navModalWrapper absolute bg-light-accent  shadow-xl z-100 p-4 rounded  "
      ref={ref}
    >
      <div className="NnavModalOptions ">
        <div
          className="p-2 cursor-pointer font-medium text-center text-light-call-sec transition-background-color duration-200
         hover:bg-light-call-sec hover:text-light-bg dark:hover:bg-dark-accent   rounded"
          onClick={() => {
            WorkspaceClick();
          }}
        >
          Workspace
        </div>
        <div
          className="p-2 cursor-pointer font-medium text-center text-light-call-sec transition-background-color duration-200
         hover:bg-light-call-sec hover:text-light-bg dark:hover:bg-dark-accent   rounded"
          onClick={() => {
            handleLogout();
          }}
        >
          logout
        </div>
      </div>
    </div>
  );
};

export default NavModal;
