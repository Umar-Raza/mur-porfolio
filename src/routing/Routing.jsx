import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import { Home } from '../pages/Home';
import { About } from '../pages//About';
import { Service } from '../pages//Service';
import { Contact } from '../pages/Contact';
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

// import Navbar from "../components/navbar/Navbar";
// import { Routes, Switch, Redirect } from 'react-router-dom'
// import { Navbar } from '../components/navbar/Navbar'


export const Routing = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar />
                <div className="main" style={{flex:"10 auto"}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about/*" element={<About />} />
                        <Route path="service/*" element={<Service />} />
                        <Route path="contact/*" element={<Contact />} />
                        {/* <Redirect to='/' /> */}
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
} 