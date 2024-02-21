import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VehicleCard from "./VehicleCard.jsx";

const Allvehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/getAllVehicles"
        );

        if (response.status === 200) {
          // console.log(response.data.data.vehicles);
          setVehicles(response.data.data.vehicles);
        }
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchData();
  }, []);

  const handleVehicleSelect = (event, id) => {
    event.preventDefault();
    navigate(`/adminVehicleDetails/${encodeURIComponent(id)}`);
  };
  return (
    <>
      {vehicles ? (
        <div>
          <h2 style={{paddingLeft:"400px",fontSize:"38px",color:"wheat"}}>All Vehicles</h2>

          <div style={{display:"flex",flexWrap:"wrap"}}>
          {vehicles.map((vehicle) => (
            <div key={vehicle._id} onClick={(e) => handleVehicleSelect(e, vehicle._id)}>
             <VehicleCard key={vehicle._id} vehicle={vehicle} />
             </div>

          ))}
          </div>
        </div>
      ) : (
        <p>No vehicles available.</p>
      )}
    </>
  );
};

export default Allvehicles;
