// UserRegistration.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserRegistration.css'; // Import UserRegistration.css instead of VehicleRegistration.css

function UserRegistration() {
  const userTypes = ["Student", "Admin"];

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Student");
  const navigate = useNavigate();

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const userTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const registerUser = () => {
    // Add logic to handle user registration (e.g., API call, etc.)
    // For now, let's just navigate to the user page
    navigate("/user");
  };

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>

      <h2>User Registration</h2>
      <h3>Name</h3>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={name}
        onChange={nameChange}
      ></input>

      <h3>Username (Email)</h3>
      <input
        type="email"
        id="username"
        placeholder="Your Email"
        value={username}
        onChange={usernameChange}
      ></input>

      <h3>Password</h3>
      <input
        type="password"
        id="password"
        placeholder="Your Password"
        value={password}
        onChange={passwordChange}
      ></input>

      <h3>User Type</h3>
      <select value={userType} onChange={userTypeChange}>
        {userTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <button onClick={registerUser}>Register User</button>

      <div className="navigation-buttons">
        <div className="content">
          <Link to="/login">
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

export default UserRegistration;
