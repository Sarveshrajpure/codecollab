import React from "react";
import Avatar from "react-avatar";

const Member = ({ username }) => {
  return (
    <div className="memberWrapper items-center bg-bubble-gum flex flex-col w-32 my-1 mx-2  ">
      <Avatar name={username} size={50} round="14px" />
      <span className="userNameBlock text-xs text-center">{username}</span>
    </div>
  );
};

export default Member;
