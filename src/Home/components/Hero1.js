import React from "react";
import lines_2 from "../../assests/lines-2.svg";
import ccLogo from "../../assests/cc_logo.png";
import ReactTypingEffect from "react-typing-effect";
import { useNavigate } from "react-router-dom";
import "./Hero1.css";

const Hero1 = () => {
  const navigate = useNavigate();

  const javaHelloWorld = {
    line1: `class HelloWorld {`,
    line2: `public static void main(String args[]) {`,
    line3: ` System.out.println("Hello, World");
  }`,
    line4: `}`,
  };

  const pythonHelloWorld = {
    line1: `def fun():`,
    line2: `   print(“Hello World”)`,
    line3: `fun()`,
  };
  const javaScriptHelloWorld = `console.log("Hello World");`;
  return (
    <div className="my-6 px-5 z-20">
      <div className="flex justify-between flex-col-reverse md:flex-row ">
        <div className="md:w-2/5 pt-5 md:pl-10 md:pt-12 ">
          <div className="hero1TitleLogo flex text-center md:text-left">
            <div className=" w-full hero1Title text-xl md:text-5xl font-semibold text-light-call-sec dark:text-light-bg">
              The best place to program online,<br></br> and discover
              collaborative coding.
            </div>
          </div>
          <div
            className="hero1Description mt-2 text-center md:text-left text-lg md:text-2xl
           text-light-text-small font-meduim"
          >
            Code Collab is a
            <span className="font-bold"> collaborative code editor </span>
            with intelisense for multiple languages, file saving, and code
            execution.
          </div>

          <div
            className="tracking-wide transition-background-color ease-in duration-200
            font-semibold text-xl bg-blue-bg dark:bg-green-bg
           text-dark-accent w-fit mt-4 rounded-md cursor-pointer
           hover:bg-green-bg dark:hover:bg-blue-bg
           hover:text-light-accent
           "
            onClick={() => {
              navigate("/register");
            }}
          >
            <button className="p-2 px-4"> Sign Up for Free</button>
          </div>
        </div>
        <div className="md:w-3/6 p-2 relative flex  ">
          <div
            className=" w-4/5 md:w-3/5  rounded-lg bg-gradient-to-r  to-yellow-start from-yellow-end
           dark:from-grey-start dark:to-grey-end  shadow h-96"
          ></div>
          <div className=" w-5/6 md:w-4/6 absolute h-96 right-16 md:right-24">
            <div className="relative">
              <div
                className="editorBox absolute left-24 md:left-20 top-1 bg-gradient-to-r 
               from-purple-bg to-yellow-end
               dark:from-dark-accent dark:to-grey-start w-4/5 md:w-3/5 h-28
                rounded-md shadow-2xl"
              >
                <div className="flex justify-between py-1 px-2 text-sm ">
                  <div className="flex ">
                    <div className="">
                      <i className="fa-solid fa-gear"></i>
                    </div>
                    <div className="px-1 font-bold text-light-accent dark:text-light-grey-start">
                      Java
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div
                  className="editorBoxContent text-xs pt-1 pl-2 font-semibold
                 text-light-call-sec dark:text-light-bg"
                >
                  <p>{javaHelloWorld.line1}</p>
                  <p>{javaHelloWorld.line2}</p>
                  <p>{javaHelloWorld.line3}</p>
                  <p>{javaHelloWorld.line4}</p>
                </div>
              </div>
              <div
                className="editorBox absolute left-32 md:left-40 top-32 bg-gradient-to-r 
                 from-purple-bg to-yellow-end
                 dark:from-dark-accent dark:to-grey-start w-4/5 md:w-3/5 
                  h-28 rounded-md shadow-2xl"
              >
                <div className="flex justify-between py-1 px-2 text-sm ">
                  <div className="flex ">
                    <div className="">
                      <i className="fa-solid fa-gear"></i>
                    </div>
                    <div className="px-1 font-bold text-light-accent dark:text-light-grey-start">
                      Python
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
                <div
                  className="editorBoxContent  text-sm pt-2 pl-2 font-semibold
                 text-light-call-sec dark:text-light-bg"
                >
                  <p>{pythonHelloWorld.line1}</p>
                  <p> &nbsp; {pythonHelloWorld.line2}</p>
                  <p>{pythonHelloWorld.line3}</p>
                </div>
              </div>
              <div
                className="editorBox absolute left-20 md:left-16 top-64 bg-gradient-to-r 
                 from-purple-bg to-yellow-end
               dark:from-dark-accent dark:to-grey-start w-4/5 md:w-3/5 
                h-28 rounded-md shadow-xl"
              >
                <div className="flex justify-between py-1 px-2 text-sm ">
                  <div className="flex ">
                    <div className="">
                      <i className="fa-solid fa-gear"></i>
                    </div>
                    <div className="px-1 font-bold text-light-accent dark:text-light-grey-start">
                      JavaScript
                    </div>
                  </div>
                  <div>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>{" "}
                <div
                  className="editorBoxContent  text-sm pt-2 pl-2 font-semibold
                 text-light-call-sec dark:text-light-bg"
                >
                  <ReactTypingEffect
                    text={javaScriptHelloWorld}
                    typingDelay={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
