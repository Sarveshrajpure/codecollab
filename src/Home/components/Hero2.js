import React from "react";
import implement from "../../assests/implement.png";
import web_only from "../../assests/web_only.png";
import contact_less from "../../assests/contact_less.png";

import "./Hero2.css";

const Hero2 = () => {
  return (
    <div className="hero2Wrapper">
      <div className="hero2Block">
        <div className="hero2Title text-center  font-bold text-4xl md:text-5xl lg:text-5xl py-10">
          Why go with Mod Menus?
        </div>
        <div className="hero2CardWrapper px-2 lg:flex lg:justify-around md:flex md:justify-around lg:px-40 md:px-40">
          <div className="hero2CardBlock py-2 lg:w-80 ">
            <div className="hero2CardIcon flex justify-center">
              <img src={implement} alt="Easy to set up" className="w-32 " />
            </div>
            <div className="hero2CardBody text-center px-2 py-2 h-40 ">
              <div className="hero2CardTitle font-semibold text-xl py-1">
                EASY TO SET UP
              </div>
              <div className="hero2CardDesc">
                Set up Mod Menus for your business in 3 easy steps in under 30
                minutes!
              </div>
            </div>
          </div>
          <div className="hero2CardBlock py-2 lg:w-80">
            <div className="hero2CardIcon flex justify-center">
              {" "}
              <img
                src={web_only}
                alt="Web Only, no apps to download"
                className="w-32  "
              />
            </div>
            <div className="hero2CardBody text-center px-2 h-40">
              <div className="hero2CardTitle font-semibold text-xl py-1">
                NO APP DOWNLOADS
              </div>
              <div className="hero2CardDesc">
                Your Customers need not download any apps to access your menus!
              </div>
            </div>
          </div>
          <div className="hero2CardBlock py-2 lg:w-80 ">
            <div className="hero2CardIcon flex justify-center">
              {" "}
              <img
                src={contact_less}
                alt="Contact less access"
                className="w-32 "
              />
            </div>
            <div className="hero2CardBody text-center px-2 h-40 ">
              <div className="hero2CardTitle font-semibold text-xl py-1">
                CONTACT LESS
              </div>
              <div className="hero2CardDesc">
                Ditch the old menus for a sleek and contact less digital menu!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
