import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <div className=" ">
        <Nav isHomePage={true} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
