import React from "react";
import "./vehiclecard.css";

const VehicleCard = ({ vehicle }) => {
  
  return (
    <div className="vehicle-card" >
      <img
        src={
          vehicle.images.length > 0 ? vehicle.images[0] : "default-image-url"
        }
        alt={vehicle.Name}
        className="vehicle-image"
      />
      <div className="vehicle-content">
        <h2>{vehicle.Name}</h2>
        <p>
          <strong>Brand:</strong> {vehicle.Brand}
        </p>

        <p>
          <strong>Vehicle Number:</strong> {vehicle.Veh_number}
        </p>
      </div>
    </div>
  );
};

export default VehicleCard;
