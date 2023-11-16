import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if ((username === 'AdminUser' || username === 'AdminUser2') && password === '12345') {
      navigate('/user-admin');
    } else if (username === 'sobrien13@student.gsu.edu' || username === 'sha14@student.gsu.edu' || 'zkennedy3@student.gsu.edu' || 'mkhalid2@student.gsu.edu' && password === '12345') {
      navigate('/user');
    } else {
      alert('Invalid credentials'); 
    }
  };

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
        <button className="button" onClick={handleLogin}>Login</button>
        <button className="button" onClick={() => navigate('/user-registration')}>
          Register New User
        </button>
      </div>
      <div className="content">
        <button className="button" onClick={() => navigate('/')}>Back to Home</button>
        <button className="button" onClick={() => navigate('/decks-public')}>View Parking Decks</button>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default LoginPage;
