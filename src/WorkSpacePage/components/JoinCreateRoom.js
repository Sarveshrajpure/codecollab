import React from "react";
import collabIconDark from "../../assests/collaborationIconDark.svg";
import collabIconLight from "../../assests/collaborationIconLight.svg";
import { ThemeContext } from "../../Utilities/themeContext";
import { v4 as uuidV4 } from "uuid";

const JoinCreateRoom = () => {
  const { theme } = React.useContext(ThemeContext);
  const createNewRoom = () => {
    let id = uuidV4();
    console.log(id);
  };
  return (
    <div className="joinCreateRoomWrapper ">
      <div className="joinCreateRoomLogo flex justify-center md:justify-start">
        <div>
          <img
            src={theme === "dark" ? collabIconLight : collabIconDark}
            alt="collabImg"
            width="40rem"
          ></img>
        </div>
        <h3 className="text-left font-semibold tracking-wide pl-2 pt-2 text-lg md:text-2xl text-light-call-sec dark:text-white">
          Collaborate
        </h3>
      </div>

      <div className="joinCreateRoomForm  ">
        <div className=" joinCreateRoomFormPrompt text-center md:text-left ">
          <h4 className="md:text-base font-semibold text-light-text-small dark:text-light-hover">
            join OR Create a code collab
          </h4>
        </div>
        <form>
          <div className="joinCreateRoomFormInput mt-4 md:w-8/12">
            <div className="mb-4 ">
              <input
                className="appearance-none transition-border-color duration-200  border 
          rounded border-light-accent focus:border-light-call-sec  dark:border-dark-accent dark:bg-dark-bg dark:focus:border-white w-full py-2 px-3 text-light-text-small text-sm font-semibold focus:outline-none "
                id="firstname"
                name="roomId"
                type="text"
                placeholder="ROOM ID"
              />
            </div>
          </div>
          <div className="joinCreateRoomJoinBtnWrapper flex justify-center md:justify-end md:w-4/6 ">
            <div className="joinCreateRoomJoinBtn tracking-wide transition-background-color ease-in duration-200 p-2 pr-6 pl-6 bg-light-call-sec rounded text-center text-lg font-semibold text-light-accent cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent">
              Join
            </div>
          </div>
        </form>
      </div>
      <div className="joinCreateRoomCreateRoomBtn mt-1 text-left">
        <h3 className="createRoomBtn text-sm dark:text-light-text-small">
          if you don't have an invite then create&nbsp;
          <span
            onClick={() => {
              createNewRoom();
            }}
            className="tracking-wide transition-opacity ease-in duration-200 text-light-call-sec font-semibold cursor-pointer underline underline-offset-1 hover:opacity-75"
          >
            new room
          </span>
        </h3>
      </div>
    </div>
  );
};

export default JoinCreateRoom;
