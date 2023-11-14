import React from 'react';
import {Link} from 'react-router-dom';
import './VehicleRegistration.css'; 


function VehicleRegistration() {

  const carMake = ["N/A", "BMW", "Honda", "Ford", "Toyota", "Chevrolet", "Other"];
  const carColors = ["N/A", "Black", "Blue", "Red", "Gray", "White", "Other"];

    return (
      <div className = 'container'>
        <header>
          <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
          <h1>Panther Park</h1>
        </header>

        <h2>Vehicle Registration</h2>
        <h3>Vehicle Make</h3>
        <select>
        {carMake.map(make => (
              <option key = {make} value = {make}>{make}</option>
            ))}
        </select>
        <h3>Vehicle Color</h3>
        <select>
        {carColors.map(color => (
              <option key = {color} value = {color}>{color}</option>
            ))}
        </select>
        <h3>License Plate Number</h3>
        <input
          type = "text"
          placeholder="plate number"
        ></input><br></br>
        <button>Register Vehicle</button>
        <div className="navigation-buttons">
        <div className="content">
          <Link to="/user">
            <button className="button">Back</button>
          </Link>
          <Link to="/">
            <button className="button">Return to Home</button>
          </Link>
        </div>
      </div>
      </div>      
    );
  }
  
  
export default VehicleRegistration;
