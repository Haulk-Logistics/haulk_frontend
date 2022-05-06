import React from 'react';
import { Outlet } from 'react-router-dom';

import LandingPageNavbar from "../LandingPageNavbar/LandingPageNavbar";
import Footer from "../Footer/Footer";

export const LandingLayout  = () => {
    return ( 
        <>
            <LandingPageNavbar/>
                <Outlet/>
            <Footer/>
        </>
    );
}
 
