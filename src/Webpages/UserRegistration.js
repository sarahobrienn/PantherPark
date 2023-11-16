// UserRegistration.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserRegistration.css';

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
    navigate("/login");
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>User Registration</h2>

        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChange}
          />
        </label>

        <label htmlFor="username">
          Username (Email):
          <input
            type="email"
            id="username"
            value={username}
            onChange={usernameChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChange}
          />
        </label>

        <label htmlFor="userType">
          User Type:
          <select id="userType" value={userType} onChange={userTypeChange}>
            {userTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <button onClick={registerUser}>Register User</button>
      </div>

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
