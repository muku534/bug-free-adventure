import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { colorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
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
import ResetPassword from './Componets/ResetPassword';
import Profile from './Componets/Profile';
import PageNotFound from './Componets/PageNotFound';
import AdminLogin from './Admin/AdminLogin';
import AdminSignup from './Admin/AdminSignup';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/Dashboard';
// import Sidebar from './scenes/global/Sidebar';
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
import Bar from "./scenes/Bar";
// import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";




// root routes 
const router = createBrowserRouter([
  { path: "/", element: <> <NavbarC /> <Category /> <Card /> <Footer /> </> },
  { path: "/Signin", element: <> <NavbarC /> <Signin /> </> },
  { path: "/Signup", element: <> <NavbarC /> <Signup /> </> },
  { path: "/Product", element: <> <NavbarC /> <Product /> </> },
  { path: "/Profile", element: <> <NavbarC /> <Profile /> </> },
  { path: "/ContactUs", element: <> <NavbarC /> <ContactUs /> </> },
  { path: "/officeLaptop", element: <> <NavbarC /> <OfficeLaptop /> </> },
  { path: "/GamingLaptop", element: <> <NavbarC /> <GamingLaptop /> </> },
  { path: "/About", element: <> <NavbarC /> <About /> </> },
  { path: "/Cart", element: <> <NavbarC /> <Cart /> </> },
  { path: "/ResetPassword", element: <> <NavbarC /> <ResetPassword /> </> },
  { path: "/AdminLogin", element: <AdminLogin /> },
  { path: "/AdminSignup", element: <AdminSignup /> },
  { path: "adminDashboard", element: <> <Dashboard /> </> },
  // { path: "/team", element: <Team /> },
  // { path: "/contacts", element: <Contacts /> },
  // { path: "/invoices", element: <Invoices /> },
  // { path: "/form", element: <Form /> },
  { path: "/bar", element: <Bar /> },
  { path: "/line", element: <Line /> },
  // { path: "/faq", element: <FAQ /> },
  { path: "/geography", element: <Geography /> },
  // { path: "/calendar", element: <Calendar /> },
  { path: "*", element: <> <PageNotFound /> </> },
])

function App() {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      {/* <colorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <div className='App'>
            <Sidebar isSidebar={isSidebar} />
              <main className='context'>
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                </Routes>
              </main>
              </div>
              </Router>
        </ThemeProvider>
      </colorModeContext.Provider> */}
      <div>
        <colorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <Sidebar isSidebar={isSidebar} /> */}
            <Topbar setIsSidebar={setIsSidebar} />
          </ThemeProvider>
        </colorModeContext.Provider>
        <RouterProvider router={router} />

      </div>
    </>
  );
}



export default App;
