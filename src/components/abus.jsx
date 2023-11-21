
import React from 'react';
import './css/aboutusstyles.css'; 

const AboutUsComponent = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="image-row">
        <div className="image-item">
          <img src="https://i.imgur.com/bssioTV.png" alt="1" />
          <p>Share  your favorite <br />
           childhood games with <br />the young ones.</p>
        </div>
        <div className="image-item">
          <img src="https://i.imgur.com/DG0HNSf.png" alt="2" />
          <p>Find new games to <br /> challenge your abilities.</p>
        </div>
        <div className="image-item">
          <img src="https://i.imgur.com/kBsN9mW.png" alt="3" />
          <p>Be Updated of the new <br /> titles in the market.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;

