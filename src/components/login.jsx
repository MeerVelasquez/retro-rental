
import React from 'react';
import Navbar from './navbar.jsx'; 
import './css/loginpage.css'; 
import Footer from './footer.jsx';

const LoginPage = () => {
  
  return (
    <div>
      <Navbar />

      <div className="login-container">
        <div className="login-content">
          <img
            src="https://i.imgur.com/DG0HNSf.png" 
            alt="Login"
            className="login-image"
          />
          <div className="login-form">
            <h2>Welcome Admin</h2>
            <form>
              <input type="text" id="username" name="username" placeholder='username' />
              <input type="password" id="password" name="password" placeholder='password' />

              <button type="submit">Sign In</button>
            </form>
            <h4>Forgot Password?</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
