
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/CardCarousel.css'; 

const CardCarousel = ({ cards }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    nextArrow: <button className="slick-next"></button>,
    prevArrow: <button className="slick-prev"></button>,
  };

  return (
    <div className="card-carousel-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className='container-imagen'>
            <img src={card.image} alt={`Card ${index + 1}`} />
            <div className='banda'>
                <p>RetroRental</p>
            </div>
            
            </div>

            <h3>{card.title}</h3>
            <p className='description'>{card.director}</p>
            <p className='description'>{card.productor}</p>
            <p className='description'>{card.release}</p>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
