import React from "react";
import web from "../src/images/mypic.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business "
        imgsrc={web}
        visit="/services"
        btname=" Get Started"
      />
    </>
  );
};
export default Home;
