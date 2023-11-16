import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './VehicleRegistration.css'; 

function VehicleRegistration() {

  const cars = ["N/A", "BMW", "Honda", "Ford", "Toyota", "Chevrolet", "Other"];
  const carColors = ["N/A", "Black", "Blue", "Red", "Gray", "White", "Other"];

  const [carMake, setCarMake] = useState("N/A");
  const [carColor, setCarColor] = useState("N/A");
  const [licensePlate, setLicensePlate] = useState("");
  const navigate = useNavigate();

  const carMakeChange = (event) => {
    setCarMake(event.target.value);
  };

  const carColorChange = (event) => {
    setCarColor(event.target.value);
  };

  const licensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };

  const lp = () => {
    window.licensePlate = licensePlate;
    navigate("/user");
  }

    return (
      <div className = 'container'>
        <header>
          <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
          <h1>Panther Park</h1>
        </header>

        <h2>Vehicle Registration</h2>
        <h3>Vehicle Make</h3>
        <select value={carMake} onChange={carMakeChange}>
        {cars.map(make => (
              <option key = {make} value = {make}>{make}</option>
            ))}
        </select>
        <h3>Vehicle Color</h3>
        <select value={carColor} onChange={carColorChange}>
        {carColors.map(color => (
              <option key = {color} value = {color}>{color}</option>
            ))}
        </select>
        <h3>License Plate Number</h3>
        <input
          type = "text"
          id = "plateNumber"
          placeholder="plate number"
          value={licensePlate}
          onChange={licensePlateChange}
        ></input><br></br>
        <button onClick={lp}>Register Vehicle</button>
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
