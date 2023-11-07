import React from 'react';
import { Link } from 'react-router-dom';

function generateRandomCount() {
  return Math.floor(Math.random() * 251); // Generates a random number between 0 and 250
}

function ParkingDeckPagePublic() {
  // Include count data for each deck
  const decks = [
    { name: 'Deck T', count: generateRandomCount() },
    { name: 'Deck G', count: generateRandomCount() },
    { name: 'Deck N', count: generateRandomCount() }
  ];

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
          <p>Parked Cars: {deck.count}</p>  {/* Display the count data */}
        </div>
      ))}
      <div className="navigation-buttons">
        <div className="content">
          <Link to="/login">
            <button className="button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ParkingDeckPagePublic;
