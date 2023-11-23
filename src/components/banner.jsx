
import React from 'react';
import './css/banner.css'; 

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-content">
          <div className="image-container">
            <img src="https://i.imgur.com/mO7FHgj.png" alt="Descripción de la imagen" />
          </div>
          <div className="text-container">
            <h1>Get to the top!</h1>
            <p>RetroRental has a whole collection <br/>for your road to success.</p>
            <button>Explore now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
