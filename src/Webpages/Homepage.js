/*The home page*/

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <header>
      <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
          <h1>Panther Park</h1>
      <h2 className="page-title">Welcome to the Home Page</h2>
      </header>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.289735108624!2d-84.38783302458137!3d33.753178083462984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503623b382a75%3A0xa4ce9fe7501ab55!2sGSU%20Parking%20Deck%20N!5e0!3m2!1sen!2sus!4v1699980435092!5m2!1sen!2sus" width="600" height="450" style={{ border:'0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="content">
          <Link to="/login">
              <button className="button">Go to Login Page</button>
          </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default HomePage;
