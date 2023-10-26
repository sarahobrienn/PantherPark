import React from 'react';
import { Link } from 'react-router-dom';

function UserPage() {
  return (
    <div>
      <h1>Welcome to the User Page</h1>
      <Link to="/payment">
        <button>Go to Payment Page</button>
      </Link>
      <Link to="/login">
        <button>Back to Login Page</button>
      </Link>
    </div>
  );
}

export default UserPage;
