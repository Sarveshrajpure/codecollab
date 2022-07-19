import React from "react";
import Avatar from "react-avatar";

const Member = ({ username }) => {
  return (
    <div className="memberWrapper items-center  flex flex-col w-20   ">
      <Avatar name={username} size={50} round="14px" />
      <span className="userNameBlock text-xs text-center font-semibold">
        {username}
      </span>
    </div>
  );
};

export default Member;
