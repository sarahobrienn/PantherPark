// DataBase.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DataBase.css';

function DataBase() {
  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>

      <h2>Database Page</h2>
      {/* Your database-related content goes here */}

      <div className="navigation-buttons">
        <div className="content">
          <Link to="/user">
            <button className="button">Back</button>
          </Link>
          <Link to="/">
            <button className="button">Return to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DataBase;
