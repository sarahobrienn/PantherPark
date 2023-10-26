import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Webpages/Homepage';
import LoginPage from './Webpages/Loginpage';
import PaymentPage from './Webpages/Paymentpage';
import UserPage from './Webpages/Userpage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation or header can go here */}
        
        {/* Define your routes */}
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
