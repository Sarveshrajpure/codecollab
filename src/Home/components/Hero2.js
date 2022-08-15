import React from "react";
import lines_2 from "../../assests/lines-2.svg";

const Hero2 = () => {
  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="w-2/5">hi</div>
        <div className="w-2/5">
          <img src={lines_2} alt="" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
