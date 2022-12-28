import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Componets/Card';
import Footer from './Componets/Footer';
import Signin from './Componets/Signin';
import Signup from './Componets/Signup';
import Item from './Componets/Product';
import About from './Componets/About';
import Category from './Componets/Category';
import NavbarC from './Componets/NavbarC';
import GamingLaptop from './Componets/GamingLaptop';
import OfficeLaptop from './Componets/OfficeLaptop';
import ContactUs from './Componets/ContactUs';
import ImageSlider from './Componets/ImageSlider';
import Alert from './Componets/Alert';
import Cart from './Componets/Cart';
import Product from './Componets/Product';

const signin = "true";
const signup = "true";
const gamingLaptop = "true";
const officeLaptop = "true";
const item = "true";
function App() {
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1800);
  }
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    setIsShown(true);
  };
  return (
    <>
      <Router>
        <NavbarC />
        <Alert alert={alert} />
        {/* {signin === "true" ? <Signin/> : <Category/>} */}
        {/* {signup === "true" ? <Signup/> : <Category/>} */}
        {/* <ImageSlider /> */}
        <Category />
        {/* {gamingLaptop === "true" ? <GamingLaptop/> : <Card/>} */}
        {/* {officeLaptop === "true" ? <OfficeLaptop/> : <Card/>} */}
        {/* {item === "true" ? <Item/> : <Card/>} */}
        <Routes>
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Signin' element={<Signin showalert={showalert} />} />
          <Route path='/Signup' element={<Signup showalert={showalert} />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Card' element={<Card />} />
          <Route path='/GamingLaptop' element={<GamingLaptop />} />
          <Route path='/OfficeLaptop' element={<OfficeLaptop />} />
        </Routes>
        {/* <Card/> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
