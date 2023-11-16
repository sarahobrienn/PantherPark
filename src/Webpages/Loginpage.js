import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLoginStudent = () => {
    if ((username === 'sobrien13@student.gsu.edu' || username === 'sha14@student.gsu.edu' || username === 'mkhalid2@student.gsu.edu' || username === 'zkennedy3@student.gsu.edu') && password === '12345') {
      navigate('/user');
    } else {
      alert('Invalid student credentials');
    }
  };
  

  const handleLoginAdmin = () => {
    if (username === 'AdminUser' || username === 'AdminUser2' && password === '12345') {
      navigate('/user-admin');
    } else {
      alert('Invalid admin credentials'); 
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
        <Link to={{ pathname: "/user", state: { username: username } }}>
        <Link to="/user">
          <button className="button">Login Student</button>
        </Link>
        <Link to="/user-admin">
          <button className="button">Login Admin</button>
        </Link>
        </Link>
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
