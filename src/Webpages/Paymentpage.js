import React from 'react';
import { Link } from 'react-router-dom';
import './Paymentpage.css';

function PaymentPage() {
  return (
    <div className="paymentpage-container">
      <h1>Payment Page</h1>
      {/* Add your payment-related content here */}
      <Link to="/user" className="link-button">User Page</Link>
    </div>
  );
}

export default PaymentPage;
