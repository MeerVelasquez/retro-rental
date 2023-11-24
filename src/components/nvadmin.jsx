import React from 'react';
import './css/nvadmin.css'; 


const Navbaradmin = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src= "https://i.imgur.com/kY7Mv1n.png" 
          alt="Logo"
          className="logo"
        />
         <a className='about' href="#about">Clients</a>
        <a className='games' href="#games">My Games</a>
        <a className='games' href="#games">Stacks</a>
        <button>My rents</button>
      </div>
      
      <div className="navbar-right">
      <img
          src= "https://i.imgur.com/59iyDrp.png" 
          alt="profile"
          className="profile"
        />
        <a className='admin' href="#about">Admin <img
          src= "https://i.imgur.com/QPqbbe9.png" 
          alt="Logo"
          className="logout"
        /></a>
        
        
        
      </div>
    </nav>
  );
};

export default Navbaradmin;