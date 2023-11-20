
import React from 'react';
import MyNavbar from './navbar.jsx';
import CarouselComponent from './carrusel.jsx';
import AboutUsComponent from './abus.jsx';
import './css/homepage.css';


const Homepage = () => {
  return (
    <div>
      <MyNavbar />
      <CarouselComponent />
      <AboutUsComponent />
    </div>
  );
};

export default Homepage;
