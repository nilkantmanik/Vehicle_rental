import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNav from "./components/Nav/AdminNav";
import Adminpage from "./components/page/Adminpage";
import Addvehicle from "./components/Addvehicle/Addvehicle";
import Allvehicles from "./components/vehicles/Allvehicles";
import Allbookings from "./components/bookings/Allbookings";
import VehicleDetails from "./components/vehicles/VehicleDetails";

// import 'tailwindcss/base.css';
// import 'tailwindcss/components.css';
// import 'tailwindcss/utilities.css';
// import './tailwind.css'; // Import the generated tailwind.css file

const Adminapp = () => {
  return (
    <div>
      <Router>
        <div className="flex">
          <div className="w-72"> {/* Tailwind CSS width class */}
            <AdminNav />
          </div>
          <div className="flex-1 p-10"> {/* Tailwind CSS flex and padding classes */}
            <Routes>
              <Route path="/admin" element={<Adminpage />} />
              <Route path="/adminaddVehicle" element={<Addvehicle />} />
              <Route path="/admingetallVehicles" element={<Allvehicles />} />
              <Route path="/admingetallbookings" element={<Allbookings />} />
              <Route path="/adminVehicleDetails/:id" element={<VehicleDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Adminapp;
