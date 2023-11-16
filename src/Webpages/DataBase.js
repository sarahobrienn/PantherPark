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

      <div className="navigation-buttons">
        <div className="content">
          {/* Supabase link button comes first */}
          <a href="https://supabase.com/dashboard/sign-in?returnTo=%2Fprojects" target="_blank" rel="noopener noreferrer">
            <button className="button">Go to Supabase</button>
          </a>
          
          {/* Other buttons */}
          <Link to="/user-admin">
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



