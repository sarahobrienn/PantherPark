// UserPage.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './UserpageAdmin.css';
function UserpageAdmin() {
  const [parkingInfo, setParkingInfo] = useState({ deck: 'N/A', floor: 'N/A' });
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the parking information from localStorage when the component mounts
    const savedParkingInfo = localStorage.getItem('parkingInfo');
    if (savedParkingInfo) {
      setParkingInfo(JSON.parse(savedParkingInfo));
    }
  }, []);

  const handleLeftParking = () => {
    // Decrement the count in the decks array in localStorage
    const decks = JSON.parse(localStorage.getItem('decks')) || [];
    const updatedDecks = decks.map(deck =>
      deck.name === parkingInfo.deck && deck.count > 0 ? { ...deck, count: deck.count - 1 } : deck
    );
    localStorage.setItem('decks', JSON.stringify(updatedDecks));
    
    // Remove the parkingInfo from localStorage
    localStorage.removeItem('parkingInfo');
    setParkingInfo({ deck: 'N/A', floor: 'N/A' }); // Reset the local state
  };

  const handleLogout = () => {
    // Clear the parking spot and any related data on logout
    localStorage.removeItem('parkingInfo');
    localStorage.removeItem('decks');
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Welcome, Admin!</h2>
      <p>Floor Parked: {parkingInfo.floor}</p>
      <p>Deck Parked: {parkingInfo.deck}</p>
      {parkingInfo.deck !== 'N/A' && (
        <button className="button" onClick={handleLeftParking}>I Left</button>
      )}
      <div className="content">
        <Link to="/payment">
          <button className="button">Go to Payment Page</button>
        </Link>
        <Link to="/decks-admin">
          <button className="button">Record Parking Spot</button>
        </Link>
        <Link to="/notifications">
          <button className="button">View Notifications</button>
        </Link>
        <Link to="/vehicle-registration">
          <button className="button"> Register Your Vehicle</button>
        </Link>
        <Link to="/database">
         <button className="button">Access DataBase</button>
        </Link>
      </div>
      <div className="centered-content">
        <button className="button" onClick={handleLogout}>Logout</button>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default UserpageAdmin;
