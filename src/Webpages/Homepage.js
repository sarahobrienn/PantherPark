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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.293822765052!2d-84.38785682458136!3d33.75307243346861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5038613efe1b9%3A0x4ac19f9be05c6e97!2sGeorgia%20State%20University!5e0!3m2!1sen!2sus!4v1699375360833!5m2!1sen!2sus" width="600" height="450" style={{ border:'0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
