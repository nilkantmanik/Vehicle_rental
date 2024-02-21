import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./vehicledetails.css"; // Import the external CSS file

const VehicleDetails = () => {
  const [vehicle, setVehicle] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/getVehicleDetails/${id}`
        );
        setVehicle(response.data.data.vehicle);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const updatehandler = async () => {
    try {
      console.log("updateclicked");
    } catch (error) {
      console.log(error);
    }
  };
  const deletehandler = async () => {
    try {
      
      const response = axios.delete(`http://localhost:8000/api/v1/deleteVehicle/${id}`).then((response) => {
          alert("Deleted successfully");
          navigate("/admingetallVehicles");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="vehicle-details-container">
      <img
        src={vehicle.images?.[0]?.url || "default-image-url"}
        alt={vehicle.Name}
        className="vehicle-details-image"
      />
      <h2 className="vehicle-details-title">{vehicle.Name}</h2>
      <div className="vehicle-details-content">
        <p>
          <strong>Brand:</strong> {vehicle.Brand}
        </p>
        <p>
          <strong>Category:</strong> {vehicle.Category}
        </p>
        <p>
          <strong>Capacity:</strong> {vehicle.Capacity}
        </p>
        <p>
          <strong>Mileage:</strong> {vehicle.Mileage}
        </p>
        <p>
          <strong>Vehicle Number:</strong> {vehicle.Veh_number}
        </p>
        <p>
          <strong>Description:</strong> {vehicle.description}
        </p>
        <p>
          <strong>Price (per hour):</strong> {vehicle.Price?.hour}
        </p>
        <p>
          <strong>Price (per day):</strong> {vehicle.Price?.day}
        </p>
        <p>
          <strong>Booked:</strong> {vehicle.Booked ? "Yes" : "No"}
        </p>
        <p>
          <strong>Reviews:</strong>{" "}
          {vehicle.reviews && vehicle.reviews.length
            ? vehicle.reviews // will write here for separate review page
            : "No Reviews"}
        </p>
      </div>

      <div>
        <button className="updatebtn" onClick={updatehandler}>
          Update Details
        </button>
        <button className="deletebtn" onClick={deletehandler}>
          Delete this vehicle
        </button>
      </div>
    </div>
  );
};

export default VehicleDetails;
