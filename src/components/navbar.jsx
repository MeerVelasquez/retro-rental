import React from 'react';
import './css/navbar.css'; 


const MyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src= "https://i.imgur.com/kY7Mv1n.png" 
          alt="Logo"
          className="logo"
        />
         <a className='about' href="#about">About Us</a>
        <a className='games' href="#games">Games</a>
      </div>
      
      <div className="navbar-right">
        <button>Admin</button>
      </div>
    </nav>
  );
};

export default MyNavbar;



