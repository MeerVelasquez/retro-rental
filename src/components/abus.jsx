
import React from 'react';
import './css/aboutusstyles.css'; 

const AboutUsComponent = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="image-row">
        <div className="image-item">
          <img src="imagen1.jpg" alt="Image 1" />
          <p>Description 1</p>
        </div>
        <div className="image-item">
          <img src="imagen2.jpg" alt="Image 2" />
          <p>Description 2</p>
        </div>
        <div className="image-item">
          <img src="imagen3.jpg" alt="Image 3" />
          <p>Description 3</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
