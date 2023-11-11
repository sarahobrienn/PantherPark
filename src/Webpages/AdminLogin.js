// AdminLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
        <h2 className="page-title">Welcome to the Admin Login Page</h2>
      </header>
      <p>*Must login with valid GSU credentials*</p>
      <div className="login-form">
        <input 
          type="text" 
          placeholder="Username" 
          className="input-field" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="input-field" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <Link to={{ pathname: "/admin-dashboard", state: { username: username } }}>
          <button className="button">Login</button>
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
      <footer></footer>
    </div>
  );
}

export default AdminLogin;
