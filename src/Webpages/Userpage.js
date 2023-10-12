import React from 'react';
import { Link } from 'react-router-dom';
import './Userpage.css';

function UserPage() {
  return (
    <div className="userpage-container">
      <h1>User Page</h1>
      {/* Add your user-related content here */}
      <Link to="/payment" className="link-button">Payment Page</Link>
    </div>
  );
}

export default UserPage;
