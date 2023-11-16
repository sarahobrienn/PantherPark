import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // State for password

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      <h2 className="page-title">Welcome to the Login Page</h2>
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
        <Link to={{ pathname: "/user", state: { username: username } }}>
        <Link to="/user-registration">
          <button className="button small-button">New User? Register Here</button>
        </Link>
        <Link to="/user">
          <button className="button">Login Student</button>
        </Link>
        <Link to="/user-admin">
          <button className="button">Login Admin</button>
        </Link>
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