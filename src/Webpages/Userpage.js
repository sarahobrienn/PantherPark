import React from 'react';
import { Link } from 'react-router-dom';

function UserPage() {
  return (
    <div className="container">
      <header>
      <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
          <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Welcome to the User Page</h2>
      <div className="content">
          <Link to="/payment">
              <button className="button">Go to Payment Page</button>
          </Link>
          <Link to="/login">
              <button className="button">Back to Login Page</button>
          </Link>
      </div>
      <footer>
          {/* Any footer content if needed */}
      </footer>
    </div>
  );
}

export default UserPage;
