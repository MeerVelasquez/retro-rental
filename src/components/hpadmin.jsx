import React from "react";
import Banner from "./banner";
import Navbaradmin from "./nvadmin";
import "./css/hpadmin.css";
import AboutUsComponent from "./abus";
import Footer from "./footer";

const Homeadmin = () => {
    return (
        <div>
        <Navbaradmin />
        <Banner />
        <AboutUsComponent />
       
        </div>
    );
    };

export default Homeadmin;