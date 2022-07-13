import React from "react";
import "./Hero3.css";
import dashboardSvg from "../../assests/dashboard.svg";

const Hero3 = () => {
  return (
    <div className="hero3Wrapper mt-10 mb-20">
      <div className="hero3block">
        <div className="hero3Title text-center font-bold text-4xl md:text-5xl lg:text-5xl py-10">
          Manage, Track & get feedback
        </div>
        <div className="hero3CardWrapper  lg:flex lg:justify-between  lg:px-80 md:px-40">
          <div className="hero3Left flex justify-center ">
            <img className="w-64" src={dashboardSvg} alt="dashboard" />
          </div>
          <div className="hero2Right p-4 ">
            <div className="hero2pointsCard flex flex justify-center">
              <div className="pl-6 text-left ">
                <ol className="list-disc pt-8 pl-5 ">
                  <li className="pt-2 text-lg ">
                    Update menu items, pricing & photos instantly.
                  </li>
                  <li className="pt-2 text-lg">
                    Access & utilise customer data
                  </li>
                  <li className="pt-2 text-lg">Get customer feedbacks.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
