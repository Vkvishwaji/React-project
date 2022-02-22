import React from "react";
import web from "../src/images/about.png";
 import Common from "./Common";

const Aboutus = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contactus"
        btname="Contact Now"
      />
    </>
  );
};
export default Aboutus;
