import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <Link to="/user">
        <button>Go to User Page</button>
      </Link>
      <Link to="/payment">
        <button>Go to Payment Page</button>
      </Link>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default LoginPage;
