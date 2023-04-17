import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from './Componets/Home';
import Footer from './Componets/Footer';
import Signin from './Componets/Signin';
import Signup from './Componets/Signup';
// import Item from './Componets/SingleProduct';
import About from './Componets/About';
import Category from './Componets/Category';
import NavbarC from './Componets/NavbarC';
import GamingLaptop from './Componets/GamingLaptop';
import OfficeLaptop from './Componets/OfficeLaptop';
import ContactUs from './Componets/ContactUs';

// import Alert from './Componets/Alert';
import Cart from './Componets/Cart';
// import ProductDetails from './Componets/ProductDetails';
import ResetPassword from './Componets/ResetPassword';
import Profile from './Componets/Profile';
import PageNotFound from './Componets/PageNotFound';
import AdminLogin from './Admin/AdminLogin';
import AdminSignup from './Admin/AdminSignup';
import ProductDetails from './Componets/ProductDetails';
import Dashboard from './Admin/Dashboard';
import Sidebar from './Admin/Sidebar';
import Orders from './Componets/Orders';
import Slider from './Componets/Slider';
import EditProfile from './Componets/EditProfile';
import CheckOut from './Componets/CheckOut';
import Navbar1 from './Componets/Navbar1';


// root routes 
const router = createBrowserRouter([
  { path: "/", element: <> <Navbar1/> <NavbarC /> <Slider /> <Category /> <Home /> <Footer /> </> },
  { path: "/Signin", element: <> <Navbar1/> <NavbarC /> <Signin /> </> },
  { path: "/Signup", element: <> <Navbar1/> <NavbarC /> <Signup /> </> },
  { path: "/ProductDetails/:id", element: <> <Navbar1/> <NavbarC /> <ProductDetails /> </> },
  { path: "/Profile", element: <> <Navbar1/> <NavbarC /> <Profile /> </> },
  { path: "/EditProfile", element: <> <Navbar1/> <NavbarC /> <EditProfile /> </> },
  { path: "/ContactUs", element: <> <Navbar1/> <NavbarC /> <ContactUs /> </> },
  { path: "/officeLaptop", element: <> <Navbar1/> <NavbarC /> <Category /> <OfficeLaptop /> <Footer /> </> },
  { path: "/GamingLaptop", element: <> <Navbar1/> <NavbarC /> <Category /> <GamingLaptop /> <Footer /> </> },
  { path: "/About", element: <> <Navbar1/> <NavbarC /> <About /> </> },
  { path: "/Cart", element: <> <Navbar1/> <NavbarC /> <Cart /> </> },
  { path: "/CheckOut", element: <> <Navbar1/> <NavbarC /> <CheckOut /> </> },
  { path: "/Orders", element: <> <Navbar1/> <NavbarC /> <Orders /> </> },
  { path: "/ResetPassword", element: <>  <Navbar1/> <NavbarC /> <ResetPassword /> </> },
  { path: "/AdminLogin", element: <AdminLogin /> },
  { path: "/AdminSignup", element: <AdminSignup /> },
  { path: "/Dashboard", element: <> <Dashboard /> </> },
  { path: "*", element: <> <PageNotFound /> </> },
])

function App() {
  return (
    <>

      <RouterProvider router={router} />


    </>
  );
};
export default App;
