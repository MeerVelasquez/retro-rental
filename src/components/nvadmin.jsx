import React from 'react';
import './css/nvadmin.css'; 
import { Link } from 'react-router-dom';


const Navbaradmin = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to='/Homeadmin'><img
          src= "https://i.imgur.com/kY7Mv1n.png" 
          alt="Logo"
          className="logo"
        /> </Link>
         
         <Link to= '/games' > <a className='games' href="#games">My Games</a> </Link>
         <Link to= '/stacks' >  <a className='games' href="#games">Stacks</a> </Link>
        <Link to= '/clients'> <button>My rents</button></Link>
      </div>
      
      <div className="navbar-right">
      <img
          src= "https://i.imgur.com/59iyDrp.png" 
          alt="profile"
          className="profile"
        />
        <Link to= '/'><a className='admin' href="#about">Admin <img
          src= "https://i.imgur.com/QPqbbe9.png" 
          alt="Logo"
          className="logout"
        /></a></Link>
        
        
        
      </div>
    </nav>
  );
};

export default Navbaradmin;