import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Notificationpage.css'; 

const messageTypes = {
  parkingDeck: { min: 0, max: 100 },
  spotAvailability: { min: 101, max: 200 },
  parkingFee: { min: 201, max: 300 },
  timeLeft: { min: 301, max: 400 },
};

const generateRandomMessage = () => {
  const floor = Math.floor(Math.random() * 7) + 1;
  const decks = ['G', 'N', 'T'];
  const deck = decks[Math.floor(Math.random() * decks.length)];
  const parkingPrice = Math.floor(Math.random() * 10) + 1;


  const messages = [
    { text: `A new parking spot is available on Floor ${floor} in ${deck} Deck.`, type: 'spotAvailability' },
    { text: "Reminder: Please pay your parking fee.", type: 'parkingFee' },
    { text: "Your parking time is about to expire.", type: 'timeLeft' },
    { text: `${deck} Deck is full.`, type: 'parkingDeck' },
    { text: `Today's parking fee is $${parkingPrice}.`, type: 'parkingFee' },

  ];

  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
};

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomMessage = generateRandomMessage();
      const range = messageTypes[randomMessage.type];
      const newNotification = {
        message_id: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min, 
        message: randomMessage.text,
        timestamp: new Date().toLocaleTimeString()
      };
      setNotifications(notifs => [newNotification, ...notifs]);
    }, 60000); // Set the interval to 1 minute

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="notification-container">
    <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.map((notif, index) => (
          <div key={index} className="notification-item">
            <span className="notification-message-id">ID: {notif.message_id}</span>
            <span className="notification-time">{notif.timestamp}</span>
            <span className="notification-message">{notif.message}</span>
          </div>
        ))}
              <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default Notification;
