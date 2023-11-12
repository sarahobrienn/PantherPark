// ParkingDeckPage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParkingDeckPageAdmin.css';

function generateRandomCount() {
  return Math.floor(Math.random() * 251); // Generates a random number between 0 and 250
}

function ParkingDeckPageAdmin() {
  const adminDecks = [
    { name: 'B Lot', count: generateRandomCount() },
    { name: 'J Deck', count: generateRandomCount() },
    { name: 'S Deck', count: generateRandomCount() },
    { name: 'U Lot', count: generateRandomCount() },
    { name: 'W Lot', count: generateRandomCount() },
  ];

  const [decks, setDecks] = useState(JSON.parse(localStorage.getItem('decks')) || adminDecks);
  const [selectedFloor, setSelectedFloor] = useState('1');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('decks', JSON.stringify(decks));
  }, [decks]);

  const incrementCount = (deckName) => {
    const updatedDecks = decks.map(deck =>
      deck.name === deckName ? { ...deck, count: deck.count + 1 } : deck
    );
    setDecks(updatedDecks);
  };

  const recordParking = (deckName) => {
    incrementCount(deckName);
    localStorage.setItem('parkingInfo', JSON.stringify({ deck: deckName, floor: selectedFloor }));
    navigate('/user-admin');
  };

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>
      <h1>Parking Decks</h1>
      {decks.map(deck => (
        <div key={deck.name} className="deck">
          <h2>{deck.name}</h2>
          <p>Self-reported parked cars: {deck.count}</p>
          <select value={selectedFloor} onChange={(e) => setSelectedFloor(e.target.value)}>
            {[1,2,3,4,5,6,7].map(floor => (
              <option key={floor} value={floor}>Floor {floor}</option>
            ))}
          </select>
          <button onClick={() => recordParking(deck.name)}>I Parked Here</button>
        </div>
      ))}
      <div className="navigation-buttons">
        <div className="content">
          <Link to="/user-admin">
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

export default ParkingDeckPageAdmin;
