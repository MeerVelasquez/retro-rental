import React from 'react';
import './css/navbar.css'; 
import { Link } from 'react-router-dom';


const MyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src= "https://i.imgur.com/kY7Mv1n.png" 
          alt="Logo"
          className="logo"
        />
        <Link to= '/' ><a className='about' href="#about">About Us</a></Link> 
        <Link to= '/games'><a className='games' href="#games">Games</a></Link> 
      </div>
      
      <div className="navbar-right">
       <Link to= '/login'><button>Admin</button></Link> 
      </div>
    </nav>
  );
};

export default MyNavbar;



