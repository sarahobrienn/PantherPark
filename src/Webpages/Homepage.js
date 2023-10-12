import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Home Page</h1>
      <Link to="/login" className="link-button">Login</Link>
    </div>
  );
}

export default HomePage;
