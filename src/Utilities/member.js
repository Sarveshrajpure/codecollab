import React from "react";
import Avatar from "react-avatar";

const Member = ({ fullName, firstName }) => {
  return (
    <div className="memberWrapper items-center  flex flex-col w-20   ">
      <Avatar name={firstName} size={50} round="14px" />
      <span className="userNameBlock text-xs text-center font-semibold pt-1 dark:text-light-accent">
        {fullName}
      </span>
    </div>
  );
};

export default Member;
