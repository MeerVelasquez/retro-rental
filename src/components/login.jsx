
import React from 'react';
import Navbar from './navbar.jsx'; // Ajusta la ruta según sea necesario
import './css/loginpage.css'; // Importa tu archivo de estilos para la página de inicio de sesión

const LoginPage = () => {
  return (
    <div>
      <Navbar />

      <div className="login-container">
        <div className="login-content">
          <img
            src="https://i.imgur.com/DG0HNSf.png" // Reemplaza con la ruta de tu imagen
            alt="Login"
            className="login-image"
          />
          <div className="login-form">
            <h2>Welcome Admin</h2>
            <form>
              <input type="text" id="username" name="username" />
              <input type="password" id="password" name="password" />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
