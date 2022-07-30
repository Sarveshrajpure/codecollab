import React from "react";
import Member from "../../Utilities/member";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditorActions = ({ clients, roomId }) => {
  const navigate = useNavigate();
  const copyRoomId = async () => {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success("Room ID has been copied to your clipboard!");
    } catch (e) {
      toast.error("Could not cpoy room ID");
    }
  };

  const leaveRoom = () => {
    navigate("/workspaces");
  };
  return (
    <div className="editorActionsContainer flex flex-col justify-between dark:bg-dark-accent ">
      <div className="roomMemberContainer ">
        <h3 className="mx-2 my-2">Connected</h3>
        <div className="roomMemberBlock  h-32 overflow-x-scroll md:h-96 md:overflow-x-auto ">
          <div className="memberList flex md:justify-center md:flex-wrap gap-3">
            {clients
              ? clients.map((mem) => (
                  <Member key={mem.socketId} username={mem.userName} />
                ))
              : ""}
          </div>
        </div>
      </div>

      <div className="flex justify-evenly md:flex-col md:h-56 md:justify-end ">
        <button
          onClick={() => {
            copyRoomId();
          }}
          className="btn copyBtn  tracking-wide transition-background-color ease-in duration-200 p-2 m-2 bg-light-call-sec rounded text-center text-l font-semibold text-light-accent cursor-pointer hover:bg-light-hover hover:text-light-call-sec dark:hover:bg-dark-accent"
        >
          Copy Room ID
        </button>
        <button
          onClick={() => {
            leaveRoom();
          }}
          className="btn leaveBtn   tracking-wide transition-background-color ease-in duration-200 p-2 m-2 font-semibold text-light-call-sec dark:text-dark-call-sec dark:bg-dark-hover  bg-light-accent rounded cursor-pointer hover:bg-light-hover dark:hover:bg-light-hover dark:hover:text-dark-bg "
        >
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default EditorActions;
