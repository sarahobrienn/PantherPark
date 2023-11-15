import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DatabasePage.css';

function DatabasePage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <div className="database-container">
      <header>
        <h1>Database Page</h1>
      </header>
      <div className="content">
        <p>Content of the Database Page goes here.</p>
        <button className="link-button" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default DatabasePage;

