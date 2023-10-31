// UserPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function UserPage(props) {
  const username = props.location?.state?.username || "User"; // retrieve the username from the passed state
  const deckParked = props.location?.state?.deck || "N/A"; // retrieve the deck from the passed state
  const floorParked = props.location?.state?.floor || "N/A"; // retrieve the floor from the passed state

  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>
      <h2 className="page-title">Welcome, {username}!</h2>
      <p>Floor Parked: {floorParked}</p> {/* Display the floor */}
      <p>Deck Parked: {deckParked}</p>   {/* Display the deck */}
      <div className="content">
          <Link to="/payment">
              <button className="button">Go to Payment Page</button>
          </Link>
          <Link to="/login">
              <button className="button">Back to Login Page</button>
          </Link>
          <Link to="/decks">
              <button className="button">Record Parking Spot</button>
          </Link>
      </div>
      <div className="centered-content">
          <Link to="/">
              <button className="button">Logout</button>
          </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default UserPage;
