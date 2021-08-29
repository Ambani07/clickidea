import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Order from '../components/Order/Order';
import ScrollTopTop from "../components/ScrollToTop";

const OrderPage = ({match}) => {
  const id = match.params.id
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [{
    id: '/',
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

  useEffect(() => {
  }, [match])

  return (
    <>
        <ScrollTopTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} menu={menuItems} />
        <Order id={id}/>
        <Footer />
    </>
  );
};

export default OrderPage;
