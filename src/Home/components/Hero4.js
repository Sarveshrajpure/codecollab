import React from "react";
import menuCard from "../../assests/menucard.svg";

const Hero4 = () => {
  return (
    <div className="hero4wrapper mt-10 mb-20">
      <div className="hero4Block">
        <div className="hero4Title text-center font-bold text-4xl md:text-5xl lg:text-5xl py-10">
          View a sample menu.
        </div>
        <div className="hero4Sub_Title text-center font-semibold text-2xl md:text-5xl lg:text-lg ">
          Customize these menus to{" "}
          <span className="text-orange-600">your heart's content.</span>
        </div>
        <div className="hero4CardWrapper  lg:flex lg:justify-center  lg:px-80 md:px-40">
          <div
            className="hero4CardBlock py-2 lg:w-80  cursor-pointer mt-10"
            onClick={() => {
              window.open("https://offdutyninjas.site/menu/2xGkaz");
            }}
          >
            <div className="hero2CardIcon flex justify-center">
              <img src={menuCard} alt="MenuCard" className="w-32 " />
            </div>
            <div className="hero4CardBody text-center px-2 py-2 h-40 ">
              <div className="hero4CardTitle font-semibold text-xl mt-10">
                Mod Restaurant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
