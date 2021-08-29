import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Pricing from '../components/Pricing/Pricing';
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

  const menuItems = [{
    id: 'about',
    title: 'About',
  },{
    id: 'services',
    title: 'Services',
  },{
    id: 'pricing',
    title: 'Price',
  },{
    id: 'contactus',
    title: 'Contact',
  }]

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} menu={menuItems} home={true} />
      <InfoSection {...homeCoverData} />
      <InfoSection {...homeAboutObj} />
      <Services />
      <Pricing />
      <Contact {...homeObjContact} />
      <Footer />
    </>
  );
};

export default Home;
