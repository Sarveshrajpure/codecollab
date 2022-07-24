import React, { useState } from "react";
import mm_logo from "../../assests/cc_logo.png";
import Member from "../../Utilities/member";

const EditorActions = () => {
  const [members, setMembers] = useState([
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Sanika R" },
    { socketId: 3, username: "Sarvesh R" },
    { socketId: 4, username: "Sarvesh R" },
    { socketId: 5, username: "Sarvesh R" },
    { socketId: 6, username: "Sarvesh R" },
    { socketId: 7, username: "Rakesh K" },
    { socketId: 8, username: "Rakesh K" },
    { socketId: 9, username: "Rakesh K" },
    { socketId: 10, username: "Sarvesh R" },
    { socketId: 11, username: "Sarvesh R" },
    { socketId: 12, username: "Sarvesh R" },
    { socketId: 13, username: "Rakesh K" },
    { socketId: 14, username: "Rakesh K" },
    { socketId: 15, username: "Rakesh K" },
  ]);
  return (
    <div className="editorActionsContainer flex flex-col justify-between dark:bg-dark-accent ">
      <div className="roomMemberContainer ">
        <h3 className="mx-2 my-2">Connected</h3>
        <div className="roomMemberBlock  h-32 overflow-x-scroll md:h-96 md:overflow-x-auto ">
          <div className="memberList flex md:justify-center md:flex-wrap gap-3">
            {members.map((mem) => (
              <Member key={mem.socketId} username={mem.username} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-evenly md:flex-col md:h-56 md:justify-end ">
        <button className="btn copyBtn  tracking-wide transition-background-color ease-in duration-200 p-2 m-2 bg-light-call-sec rounded text-center text-l font-semibold text-light-accent cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent">
          Copy Room ID
        </button>
        <button className="btn leaveBtn   tracking-wide transition-background-color ease-in duration-200 p-2 m-2 font-semibold text-light-call-sec dark:text-dark-call-sec dark:bg-dark-hover  bg-light-accent rounded cursor-pointer hover:bg-light-hover dark:hover:bg-light-hover dark:hover:text-dark-bg ">
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default EditorActions;
