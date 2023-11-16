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
          <Link to="/user">
            <button className="button">Back</button>
          </Link>
          <Link to="/">
            <button className="button">Return to Home</button>
          </Link>

          {/* Use the embed tag with Supabase link */}
          <iframe
            src="https://supabase.com/dashboard/sign-in?returnTo=%2Fprojects"
            type="text/html"
            style={{ width: '100%', height: '600px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default DataBase;

