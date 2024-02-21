const express = require("express");
const {
  addVehicle,
  getAllVehicle,
  getVehicleDetails,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehicleController");

const router = express.Router();

router.route("/addvehicle").post(addVehicle);
router.route("/getAllVehicles").get(getAllVehicle);
router.route("/getVehicleDetails/:id").get(getVehicleDetails);
router.route("/updateVehicle/:id").put(updateVehicle);
router.route("/deleteVehicle/:id").delete(deleteVehicle);
module.exports = router;
