/*The payment page for the user, where they will put CC number, zip code, and other information*/
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PaymentContext from '../PaymentContext';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cvv, setCvv] = useState('');
  const [expDate, setExpDate] = useState('');
  const [zipCode, setZipCode] = useState('');

  const { setPaymentData } = useContext(PaymentContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    setPaymentData({
      cardNumber,
      cardName,
      cvv,
      expDate,
      zipCode
    });

    navigate('/confirmation');
  };

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Payment Information</h2>
      <div className="payment-form">
        <input 
          type="text" 
          placeholder="Credit Card Number" 
          className="input-field" 
          value={cardNumber} 
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Cardholder Name" 
          className="input-field" 
          value={cardName} 
          onChange={(e) => setCardName(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="CVV" 
          className="input-field" 
          value={cvv} 
          onChange={(e) => setCvv(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Expiration Date (MM/YY)" 
          className="input-field" 
          value={expDate} 
          onChange={(e) => setExpDate(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Zip Code" 
          className="input-field" 
          value={zipCode} 
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button className="button" onClick={handlePayment}>Make Payment</button>
      </div>
      <div className="content">
        <Link to="/login">
          <button className="button">Back to Login Page</button>
        </Link>
        <Link to="/">
          <button className="button">Back to Home</button>
        </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default PaymentPage;
