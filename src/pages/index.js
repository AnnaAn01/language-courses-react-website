import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
// import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Testimonials from "../components/Testimonials";
import { homeObjOne } from "../components/InfoSection/Data";
import { homeObjTwo } from "../components/Testimonials/Data";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/*<HeroSection />*/}
      <InfoSection {...homeObjOne} />
      <Courses />
      {/*<InfoSection {...homeObjTwo} />*/}
      <Testimonials {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;
