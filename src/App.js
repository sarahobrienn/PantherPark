import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Webpages/Homepage';
import LoginPage from './Webpages/Loginpage';
import PaymentPage from './Webpages/Paymentpage';
import UserPage from './Webpages/Userpage';
import ConfirmationPage from './Webpages/ConfirmationPage';
import ParkingDeckPage from './Webpages/ParkingDeckPage'; // Import the ParkingDeckPage
import ParkingDeckPagePublic from './Webpages/ParkingDeckPagePublic'; // Import the ParkingDeckPagePublic
import PaymentContext from './PaymentContext';
import Notificationpage from './Webpages/Notificationpage';
import VehicleRegistration from './Webpages/VehicleRegistration';
import UserpageAdmin from './Webpages/UserpageAdmin';
import ParkingDeckPageAdmin from './Webpages/ParkingDeckPageAdmin';


function App() {
  const [paymentData, setPaymentData] = React.useState({});

  return (
    <PaymentContext.Provider value={{ paymentData, setPaymentData }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/decks" element={<ParkingDeckPage />} /> {/* Route for ParkingDeckPage */}
          <Route path="/decks-public" element={<ParkingDeckPagePublic />} /> {/* Route for ParkingDeckPagePublic */}
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/notifications" element={<Notificationpage />} />
          <Route path="/vehicle-registration" element={<VehicleRegistration />} />
          <Route path="/user-admin" element={<UserpageAdmin />} />
          <Route path="/decks-admin" element={<ParkingDeckPageAdmin />} />
        </Routes>
      </Router>
    </PaymentContext.Provider>
  );
}

export default App;
