import React from 'react';
import { Link } from 'react-router-dom';

function PaymentPage() {
  return (
    <div>
      <h1>Welcome to the Payment Page</h1>
      <Link to="/login">
        <button>Back to Login Page</button>
      </Link>
    </div>
  );
}

export default PaymentPage;
