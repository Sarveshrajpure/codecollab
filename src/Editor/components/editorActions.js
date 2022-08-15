import React from "react";
import Member from "../../Utilities/member";
import toast from "react-hot-toast";
import createWhatsAppLink from "../../Utilities/whatsAppMsg";
import { useNavigate } from "react-router-dom";

const EditorActions = ({ clients, roomId, username }) => {
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
        <h3 className="text-m text-center py-2 ">--- Connected ---</h3>
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

      <div className="flex justify-evenly flex-col-reverse md:flex-col md:h-56 md:justify-end ">
        <div className="">
          <div className="text-m text-center py-1 ">--- Invite via ---</div>
          <div className="flex justify-evenly text-2xl mx-4 my-2 md:mx-0     ">
            <button
              onClick={() => {
                createWhatsAppLink(username, roomId);
              }}
              className="btn  text-whatsApp-green bg-light-accent w-1/2 py-1 cursor-pointer rounded mx-2  
              tracking-wide transition-background-color transition-text ease-in duration-200  hover:bg-whatsApp-green hover:text-light-accent dark:hover:bg-whatsApp-green dark:hover:text-light-accent "
            >
              <i class="fa-brands fa-whatsapp"></i>
            </button>

            <button
              onClick={() => {
                createWhatsAppLink(username, roomId);
              }}
              className="btn text-gmail-yellow bg-light-accent w-1/2 py-1 cursor-pointer rounded mx-2
              tracking-wide transition-background-color transition-text  ease-in duration-200  hover:bg-gmail-yellow hover:text-light-accent dark:hover:bg-gmail-yellow dark:hover:text-light-accent "
            >
              <i class="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            copyRoomId();
          }}
          className="mx-6 md:mx-2  m-2 btn copyBtn  tracking-wide transition-background-color ease-in duration-200 p-2 
           bg-light-call-sec rounded text-center text-l font-semibold text-light-accent cursor-pointer hover:bg-light-hover
            hover:text-light-call-sec  dark:hover:bg-light-hover"
        >
          Copy Room ID
        </button>
        <button
          onClick={() => {
            leaveRoom();
          }}
          className="mx-6 md:mx-2  m-2 btn leaveBtn   tracking-wide transition-background-color ease-in duration-200 p-2  font-semibold
           text-light-call-sec dark:text-dark-call-sec dark:bg-dark-hover 
            bg-light-accent rounded cursor-pointer hover:bg-light-hover
             dark:hover:bg-light-hover dark:hover:text-dark-bg "
        >
          Leave Room
        </button>
      </div>
    </div>
  );
};

export default EditorActions;
