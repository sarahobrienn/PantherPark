import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function UserPage() {
  const location = useLocation();
  const username = location.state?.username || ''; // Default to '...' if no data

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Welcome, {username}</h2>
      <div className="content">
          <Link to="/payment">
              <button className="button">Go to Payment Page</button>
          </Link>
          <Link to="/login">
              <button className="button">Back to Login Page</button>
          </Link>
      </div>
      <div className="centered-content">
          <Link to="/">
              <button className="button">Logout</button>
          </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default UserPage;
