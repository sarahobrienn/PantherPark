import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      <h2 className="page-title">Welcome to the User Selection Page</h2>
      </header>
      <p>Please Select Login User Type</p>
      <div className="content">
        <Link to="/student-login">
          <button className="button">Student Login</button>
        </Link>
        <Link to="/admin-login">
          <button className="button">Admin Login</button>
        </Link>
      </div>
      <div className="content">
        <Link to="/">
          <button className="button">Back to Home</button>
        </Link>
        <Link to="/decks-public"> 
          <button className="button">View Parking Decks</button>
        </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default LoginPage;
