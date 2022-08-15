import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";

const Home = () => {
  return (
    <div>
      <div className=" ">
        <Nav isHomePage={true} />
        <Hero1 />
        <Hero2 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
