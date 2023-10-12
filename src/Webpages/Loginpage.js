import React from 'react';
import { Link } from 'react-router-dom';
import './Loginpage.css';

function LoginPage() {
  return (
    <div className="loginpage-container">
      <h1>Login Page</h1>
      <Link to="/user" className="link-button">User Page</Link>
      <Link to="/payment" className="link-button">Payment Page</Link>
    </div>
  );
}

export default LoginPage;
