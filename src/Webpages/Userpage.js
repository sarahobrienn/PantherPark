import React from 'react';
import { Link } from 'react-router-dom';

function UserPage() {
  return (
    <div>
      <h1>User Page</h1>
      {/* Add your user-related content here */}
      <Link to="/payment">Payment Page</Link>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default UserPage;
