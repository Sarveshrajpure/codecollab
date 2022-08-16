import React from "react";
import Nav from "../Home/components/Nav";
import WorkSpace from "./components/workSpace";
import Footer from "../Home/components/Footer";

const WorkSpacePage = () => {
  return (
    <>
      <div className="profilePageWrapper min-h-screen ">
        <Nav isHomePage={false} />
        <WorkSpace />
      </div>
      <Footer />
    </>
  );
};

export default WorkSpacePage;
