
const express = require("express");
const router = express.Router();

const {
  createBooking,
  getAllBookings,
  getBookingById,
  getBookingDetailById,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController')
router.route("/createBooking").post(createBooking);

router.route("/getBookingById/:id").get(getBookingById);

router.route("/getBookingDetailById/:id").get(getBookingDetailById);

router.route("/getAllBookings").get(getAllBookings);

router.route("/updateBooking/:id").put(updateBooking);

router.route("/deleteBooking/:id").delete(deleteBooking);


module.exports = router



