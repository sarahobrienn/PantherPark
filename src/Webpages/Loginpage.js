/* The login page for the user*/
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="container">
      <header>
          <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
          <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Welcome to the Login Page</h2>
      <div className="login-form">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <Link to="/user">
          <button className="button">Login</button>
        </Link>
      </div>
      <div className="content">
          <Link to="/payment">
              <button className="button">Go to Payment Page</button>
          </Link>
          <Link to="/">
              <button className="button">Back to Home</button>
          </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default LoginPage;
