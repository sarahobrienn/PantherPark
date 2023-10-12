// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default HomePage;
