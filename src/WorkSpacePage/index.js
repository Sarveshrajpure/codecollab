import React from "react";
import Nav from "../Home/components/Nav";
import WorkSpace from "./components/workSpace";

const WorkSpacePage = () => {
  return (
    <div className="profilePageWrapper">
      <Nav isHomePage={false} />
      <WorkSpace />
    </div>
  );
};

export default WorkSpacePage;
