import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <header>
      <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />

          <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Welcome to the Home Page</h2>
      <div className="content">
          <Link to="/login">
              <button className="button">Go to Login Page</button>
          </Link>
      </div>
      <footer>
          {/* Any footer content if needed */}
      </footer>
    </div>
  );
}

export default HomePage;
