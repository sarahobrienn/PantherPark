import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Webpages/Homepage';
import LoginPage from './Webpages/Loginpage';
import PaymentPage from './Webpages/Paymentpage';
import UserPage from './Webpages/Userpage';
import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        {/* Navigation or header can go here */}
        
        {/* Define your routes */}
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/user" component={UserPage} />
      </div>
    </Router>
  );
}

export default App;
