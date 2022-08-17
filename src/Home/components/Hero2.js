import React from "react";
import lines_2 from "../../assests/lines-2.svg";
import lines_3 from "../../assests/lines-3.svg";
import HeroCard from "./heroCard";

const Hero2 = () => {
  return (
    <div className="">
      <div className="flex flex-col-reverse md:flex-row justify-between mt-4 ">
        <div className="md:w-4/5 relative -top-80 md:top-16 z-10 md:left-52  md:flex justify-between ">
          <div className="md:w-3/12">
            <HeroCard
              icon={"fa-solid fa-laptop-code"}
              title="Real Time Editor"
              description="Code with members in real time
               to share your ideas, brainstorm logic 
               and create solutions together!"
            />
          </div>
          <div className="md:w-3/12">
            <HeroCard
              icon={"fa-brands fa-square-js"}
              title="Compile and Run"
              description="Compile and run your code in desired 
              programming languages to choose
               from- JS, Python ,Java ,TS etcetera."
            />
          </div>
          <div className="md:w-3/12">
            <HeroCard
              icon={"fa-solid fa-cloud-arrow-up"}
              title="Workspaces"
              description="Create Workspaces and save all of your code on the cloud, accesible anywhere anytime!"
            />
          </div>
        </div>
        <div className="md:w-2/5 relative left-10 md:-top-10 md:left-0  ">
          <img src={lines_2} alt="" className="w-full  top-1 z-0" />
        </div>
      </div>
      <div className="md:w-2/5 absolute  md:top-2/3  -left-20">
        <img src={lines_3} alt="" className="w-full -mt-96 md:mt-0" />
      </div>
    </div>
  );
};

export default Hero2;
