// ParkingDeckPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ParkingDeckPage() {
  const [decks, setDecks] = useState([
    { name: 'Deck T', count: 0 },
    { name: 'Deck G', count: 0 },
    { name: 'Deck N', count: 0 }
  ]);

  const [selectedFloor, setSelectedFloor] = useState('1');

  const navigate = useNavigate();

  const incrementCount = (deckName) => {
    setDecks(decks.map(deck => 
      deck.name === deckName ? { ...deck, count: deck.count + 1 } : deck
    ));
  };

  const decrementCount = (deckName) => {
    setDecks(decks.map(deck => 
      deck.name === deckName && deck.count > 0 ? { ...deck, count: deck.count - 1 } : deck
    ));
  };

  const recordParking = (deckName) => {
    incrementCount(deckName);
    navigate('/user', {
      state: {
        deck: deckName,
        floor: selectedFloor
      }
    });
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
          <button onClick={() => decrementCount(deck.name)}>I Left Here</button>
        </div>
      ))}
      <div className="navigation-buttons">
        <div className="content">
          <Link to="/user">
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

export default ParkingDeckPage;
