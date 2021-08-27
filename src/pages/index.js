import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Pricing from '../components/Pricing';
import Contact from '../components/Contact/Contact'
import {
  homeCoverData,
  homeAboutObj,
  homeObjContact,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
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
      {/* <HeroSection {...homeCoverObj} /> */}
      <InfoSection {...homeCoverData} />
      <InfoSection {...homeAboutObj} />
      <Services />
      <Pricing />
      <Contact {...homeObjContact} />
      {/* <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} /> */}
      <Footer />
    </>
  );
};

export default Home;
