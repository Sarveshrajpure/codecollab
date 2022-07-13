import React from "react";
import Typical from "react-typical";
import mockup from "../../assests/mockup.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Hero1.css";

const Hero1 = () => {
  const navigate = useNavigate();
  const user = useSelector((state) =>
    state.User.user_verification.user.firstname
      ? state.User.user_verification.user
      : null
  );

  const navigateTo = async () => {
    if (user) {
      navigate("/dashboard/dashboardhome");
    } else {
      navigate("/register");
    }
  };
  return (
    <div className="hero1Wrapper">
      <div
        className="textAnimationBlock  
      pt-20
       lg:flex lg:justify-between
       md:flex md:justify-between
      items-center
      "
      >
        <div className="text-4xl  md:text-3xl  lg:text-4xl   px-2 py-4  lg:px-20  ">
          <p>Create your easy to </p>

          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["Implement 💻", 1800, "Access 🤳", 1800]}
            className="text-orange-600"
          />
          <p> mobile menu in less than 10 minutes!</p>

          <div
            className="createMenuBtn    mt-6   text-2xl   md:text-2xl   lg:text-2xl md:mt-10"
            onClick={() => {
              navigateTo();
            }}
          >
            {user ? "Manage Menu" : " Create Menu"}
          </div>
        </div>
        <div>
          <img className="mockimg" src={mockup} alt="mockup" />
        </div>
      </div>
    </div>
  );
};
export default Hero1;
