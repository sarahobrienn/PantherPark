/* The payment confirmation page */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PaymentContext from '../PaymentContext';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const { paymentData } = useContext(PaymentContext);
  // Retrieve parking information from localStorage
  const parkingInfo = JSON.parse(localStorage.getItem('parkingInfo')) || { deck: 'N/A', floor: 'N/A' };
  const licensePlate = window.licensePlate || "N/A";

  return (
    <div className="container">
      <header>
          <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
          <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Payment Confirmed</h2>
      <h3>Thank you for your recent transaction!</h3>
      <div className="receipt-box">
        <h4>Transaction Details:</h4>
        <p>Credit Card Number: {paymentData.cardNumber}</p>
        <p>Cardholder Name: {paymentData.cardName}</p>
        <p>Expiration Date: {paymentData.expDate}</p>
        <p>Zip Code: {paymentData.zipCode}</p>
        {/* Add parking information */}
        <p>Parking Deck: {parkingInfo.deck}</p>
        <p>Plate Number: {licensePlate}</p>
      </div>
      <div className="content">
        <Link to="/user">
          <button className="button">Back to User Page</button>
        </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default ConfirmationPage;
