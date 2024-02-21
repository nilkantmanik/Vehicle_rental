import React, { useState } from "react";
import "./addvehicle.css";

const Addvehicle = () => {
  const initialData = {
    Name: "",
    Capacity: "",
    Veh_number: "",
    description: "",
    Category: "",
    Brand: "",
    Mileage: "",
  };

  const [vehicleData, setVehicleData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to send vehicleData to the backend (POST request)
    console.log("Vehicle Data Submitted:", vehicleData);
  };

  return (
    <div>
      <h3 className="custom-h3">Add New Vehicle here</h3>

      <div className="formdiv">
        <div className="inputdiv">
          <label>Vehicle Name:</label>
          <input
            type="text"
            name="Name"
            value={vehicleData.Name}
            onChange={handleChange}
            placeholder="Enter Vehicle Name"
          />
        </div>

        <div className="inputdiv">
          <label>Vehicle Number:</label>
          <input
            type="text"
            name="Veh_number"
            value={vehicleData.Veh_number}
            onChange={handleChange}
            placeholder="Enter Vehicle Number"
          />
        </div>

        <div className="inputdiv">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={vehicleData.description}
            onChange={handleChange}
            placeholder="Enter Description"
          />
        </div>

        <div className="inputdiv">
          <label>Capacity:</label>
          <input
            type="number"
            name="Capacity"
            value={vehicleData.Capacity}
            onChange={handleChange}
            placeholder="Enter Capacity (Number)"
          />
        </div>

        <div className="inputdiv">
          <label>Category:</label>
          <input
            type="text"
            name="Category"
            value={vehicleData.Category}
            onChange={handleChange}
            placeholder="Enter Category"
          />
        </div>

        <div className="inputdiv">
          <label>Brand:</label>
          <input
            type="text"
            name="Brand"
            value={vehicleData.Brand}
            onChange={handleChange}
            placeholder="Enter Brand"
          />
        </div>

        <div className="inputdiv">
          <label>Mileage:</label>
          <input
            type="number"
            name="Mileage"
            value={vehicleData.Mileage}
            onChange={handleChange}
            placeholder="Enter Mileage (Number)"
          />
        </div>

        <div className="submitdiv">
          <input
            className="submitbutton"
            type="button"
            value="Submit"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Addvehicle;
