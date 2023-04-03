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


// root routes 
const router = createBrowserRouter([
  { path: "/", element: <> <NavbarC /> <Category /> <Home /> <Footer /> </> },
  { path: "/Signin", element: <> <NavbarC /> <Signin /> </> },
  { path: "/Signup", element: <> <NavbarC /> <Signup /> </> },
  { path: "/ProductDetails/:id", element: <> <NavbarC /> <ProductDetails /> </> },
  { path: "/Profile", element: <> <NavbarC /> <Profile /> </> },
  { path: "/ContactUs", element: <> <NavbarC /> <ContactUs /> </> },
  { path: "/officeLaptop", element: <> <NavbarC /> <OfficeLaptop /> </> },
  { path: "/GamingLaptop", element: <> <NavbarC /> <GamingLaptop /> </> },
  { path: "/About", element: <> <NavbarC /> <About /> </> },
  { path: "/Cart/:id", element: <> <NavbarC /> <Cart /> </> },
  { path: "/ResetPassword", element: <> <NavbarC /> <ResetPassword /> </> },
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
