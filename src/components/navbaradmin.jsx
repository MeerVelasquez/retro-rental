import React from 'react';
import './css/adminnavbar.css'; 


const adminNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src= "./img/logo.png " 
          alt="Logo"
          className="logo"
        /> 
         <a className='clients' href="#about">Clients</a>
        <a className='games' href="#games">My Games</a>
        <a className='stacks' href="#games">Stacks</a>
        <button>My rents</button>
      </div>
      
      <div className="navbar-right">
       <img className='admin-logo'></img>
       <a className='admin'> Admin</a>
       <a className='logout'>*</a>
      </div>
    </nav>
  );
};


export default adminNavbar;
