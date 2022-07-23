import React from "react";
import newWorkspaceIconLight from "../../assests/workSpaceLight.svg";
import newWorkspaceIconDark from "../../assests/workSpaceDark.svg";
import { ThemeContext } from "../../Utilities/themeContext";
import JoinCreateRoom from "./JoinCreateRoom";
import WorkSpaceFiles from "./WorkSpaceFiles";
import "./workSpace.css";

const WorkSpace = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="workspaceWrapper ">
      <div className="workSpaceNavWrapper flex pt-5 pb-5 px-4 md:px-24 md:pt-8 md:pb-5">
        <div className="workSpaceNav w-9/12 md:w-5/6 flex flex-col md:flex-row  ">
          <h3 className="tracking-wide pb-2 pl-1 md:w-1/6 md:pt-2 text-base  text-light-call-sec font-semibold md:text-2xl dark:text-white ">
            Work-space
          </h3>
          <div className="workSpaceNavDropDown w-9/12 ">
            <select className="align-middle outline-none m-0 w-full border-2 border-light-accent  text-light-call-sec text-sm md:text-lg rounded-lg  focus:border-light-accent   p-2.5  dark:bg-dark-bg dark:border-dark-accent dark:placeholder-dark-call-sec dark:text-dark-call-sec  dark:focus:border-dark-accent">
              <option selected>Choose a work-space</option>
              <option value="US">My worksapce</option>
              <option value="CA">College worksapce</option>
            </select>
          </div>
        </div>
        <div className="newWorkSpaceBtnWrapper pt-7 md:pt-0 w-3/12 ">
          <div className=" newWorkSpaceBtn   md:w-9/12 flex  justify-center p-3 md:p-3 text-light-call-sec dark:text-dark-call-sec dark:bg-dark-accent   bg-light-accent rounded cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover ">
            <div className="newWorkSapceIcon pt-0.5 md:pt-1 md:ml-0">
              <img
                src={
                  theme === "dark"
                    ? newWorkspaceIconLight
                    : newWorkspaceIconDark
                }
                width="20rem"
                alt="wroksapceLight"
              />
            </div>
            <h3 className="ml-2.5 font-semibold text-sm md:text-base">New</h3>
          </div>
        </div>
      </div>
      <div className="Files-RoomFunctionsWrapper md:flex pt-5 pb-5 px-4 md:px-24 md:pt-8 md:pb-5">
        <div className="md:w-4/6">
          <WorkSpaceFiles />
        </div>
        <div className="md:w-2/6">
          <JoinCreateRoom />
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
