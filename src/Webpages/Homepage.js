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
      <iframe src="https://www.google.com/maps/d/embed?mid=1Gdr6CXkFH_R_WMyPZyhDpn3MWKTPCN8&ehbc=2E312F" width="640" height="480" style={{ border:'0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
