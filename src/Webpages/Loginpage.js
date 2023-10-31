import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  // State to hold the user's input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Not used for display, but captured for completeness

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Welcome to the Login Page</h2>
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
          <button className="button">Login</button>
        </Link>
      </div>
      <div className="content">
        <Link to="/payment">
          <button className="button">Go to Payment Page</button>
        </Link>
        <Link to="/">
          <button className="button">Back to Home</button>
        </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default LoginPage;
