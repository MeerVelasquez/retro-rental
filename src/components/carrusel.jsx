import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './css/carouselstyles.css'; // Importa tus estilos personalizados

const CarouselComponent = () => {
  return (
    <div className="custom-carousel-container">
      <Carousel>
        <Carousel.Item className="custom-carousel-item">
          <img
            className="d-block w-100"
            src="https://i.imgur.com/NOgcQMs.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>RetroRental</h3>
            <p>Best deals for Black Friday!</p>
          </Carousel.Caption>
        </Carousel.Item>
        

        

      </Carousel>
    </div>
  );
};

export default CarouselComponent;
