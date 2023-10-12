// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/user">User Page</Link>
      <Link to="/payment">Payment Page</Link>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default LoginPage;
