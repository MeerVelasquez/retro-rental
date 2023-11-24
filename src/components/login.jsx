import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/loginpage.css'; 
import Footer from './footer.jsx';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (username === 'admin' && password === '123456') {
    
      navigate('/Homeadmin'); 
    } else {
   
      setError('Invalid username or password');
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-content">
          <img
            src="https://i.imgur.com/DG0HNSf.png" 
            alt="Login"
            className="login-image"
          />
          <div className="login-form">
            <h2>Welcome Admin</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                id="username"
                name="username"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Sign In</button>
              {error && <p className="error-message">{error}</p>}
            </form>
            <h4>Forgot Password?</h4>
            <h4>username: admin - password: 123456</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
