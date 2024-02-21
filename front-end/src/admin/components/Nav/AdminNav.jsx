import React from "react";
import { Link } from "react-router-dom";
import "./adminnav.css"; // Import the external CSS file

const AdminNav = () => {
  return (
    <div className="admin-nav-container">
      <div>
        <Link to="/admin" className="admin-nav-link">
          Home
        </Link>
      </div>
      <div>
        <Link to="/adminaddVehicle" className="admin-nav-link">
          Add New Vehicle
        </Link>
      </div>
      <div>
        <Link to="/admingetallVehicles" className="admin-nav-link">
          All Vehicles
        </Link>
      </div>
      <div>
        <Link to="/admingetallbookings" className="admin-nav-link">
          All Bookings
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
