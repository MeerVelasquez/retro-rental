
import React from 'react';
import CardCarousel from './CardCarousel';
import './css/cards.css';

const Cartas = ({title, cards}) => {
  

  return (
    <div className='main-cont'>
        <div className='title-container'>
            <h2 >{title}</h2>
            </div>
      
      <CardCarousel cards={cards} />
    </div>
  );
};

export default Cartas;
