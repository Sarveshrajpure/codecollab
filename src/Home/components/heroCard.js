import React from "react";

const HeroCard = ({ icon, title, description }) => {
  return (
    <div className="p-2 mb-8 md:mb-0">
      <div>
        <div
          className="px-2 bg-gradient-to-r from-grey-start to-grey-end 
        dark:to-yellow-start dark:from-yellow-end
        w-20 rounded-full flex justify-center"
        >
          <i
            className={`${icon} text-4xl py-5
          
          
          text-white dark:text-dark-accent`}
          ></i>
        </div>
        <div className="font-bold p-2 text-2xl text-light-call-sec dark:text-light-bg ">
          {title}
        </div>
        <div className="text-lg pl-2 text-light-text-small">{description}</div>
      </div>
    </div>
  );
};

export default HeroCard;
