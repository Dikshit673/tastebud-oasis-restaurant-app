import React from 'react'
import "./Style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarCom from './Components/NavbarCom';
import FooterCom from './Components/FooterCom';

import PageScroolToTop from './Pages/PageScroolToTop';
import Home from './Pages/Home';
import About from './Pages/About'
import Service from './Pages/Service'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Booking from './Pages/Booking';
import Testimonial from './Pages/Testimonial';
import Error from './Pages/Error';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';


const Web = () => {
    return (
        <>
            <Router>
                <PageScroolToTop />
                <NavbarCom />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/service" element={<Service />}></Route>
                    <Route path="/menu" element={<Menu />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/booking" element={<Booking />}></Route>
                    <Route path="/testimonial" element={<Testimonial />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
                <FooterCom />
            </Router>
        </>
    )
}

export default Web
