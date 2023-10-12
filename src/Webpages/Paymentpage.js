import React from 'react';
import { Link } from 'react-router-dom';

function PaymentPage() {
  return (
    <div>
      <h1>Payment Page</h1>
      {/* Add your payment-related content here */}
      <Link to="/user">User Page</Link>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default PaymentPage;
