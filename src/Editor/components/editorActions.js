import React, { useState } from "react";
import mm_logo from "../../assests/cc_logo.png";
import Member from "../../Utilities/member";

const EditorActions = () => {
  const [members, setMembers] = useState([
    { socketId: 1, username: "Rakesh K" },
    { socketId: 2, username: "Sanika R" },
    { socketId: 3, username: "Sarvesh R" },
    { socketId: 3, username: "Sarvesh R" },
    { socketId: 3, username: "Sarvesh R" },
    { socketId: 3, username: "Sarvesh R" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 3, username: "Sarvesh R" },
    { socketId: 3, username: "Sarvesh R" },
    { socketId: 3, username: "Sarvesh R" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
    { socketId: 1, username: "Rakesh K" },
  ]);
  return (
    <div className="editorActionsContainer flex flex-col justify-between ">
      <div className="roomMemberContainer ">
        <h3>Connected</h3>
        <div className="roomMemberBlock h-32 overflow-x-scroll md:h-96 md:overflow-x-auto ">
          <div className="memberList flex md:block">
            {members.map((mem) => (
              <Member key={mem.socketId} username={mem.username} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-evenly md:flex-col md:h-56 md:justify-end ">
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave ROOM</button>
      </div>
    </div>
  );
};

export default EditorActions;
