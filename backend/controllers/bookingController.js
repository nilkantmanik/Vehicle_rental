const Booking = require("../models/bookingModel");
const ErrorHandler = require("../util/errorhandler");
const SuccessHandler = require("../util/successhandler");

exports.createBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    const successResponse = new SuccessHandler(
      "New booking Added successfully",
      200,
      { newBooking }
    );
    successResponse.sendResponse(res);
  } catch (error) {
    const errorResponse = new ErrorHandler("Something went wrong :", 404);
    errorResponse.sendResponse(res);
  }
};

//  all of user
exports.getBookingById = async (req, res) => {
  try {
    const id = req.params.id;
    const bookings = await Booking.find({ userId: id });
    const successResponse = new SuccessHandler(
      "Bookings fetched successfully",
      200,
      { bookings }
    );
    successResponse.sendResponse(res);
  } catch (error) {
    const errorResponse = new ErrorHandler("Something went wrong :", 404);
    errorResponse.sendResponse(res);
  }
};

//admin
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    if (bookings.length > 0) {
      const successResponse = new SuccessHandler(
        "Bookings fetched successfully",
        200,
        { bookings }
      );
      successResponse.sendResponse(res);
    }
  } catch (error) {
    const errorResponse = new ErrorHandler("Something went wrong :", 404);
    errorResponse.sendResponse(res);
  }
};

// detail
exports.getBookingDetailById = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await Booking.find({ _id: id });
    const successResponse = new SuccessHandler(
      "Booking details fetched successfully",
      200,
      { booking }
    );
    successResponse.sendResponse(res);
  } catch (error) {
    const errorResponse = new ErrorHandler("Something went wrong :", 404);
    errorResponse.sendResponse(res);
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await Booking.findOne({ _id: id });
    if (booking) {
      const updatedBooking = await Booking.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      const successResponse = new SuccessHandler(
        "Booking Updated successfully",
        200,
        { updatedBooking }
      );
      successResponse.sendResponse(res);
    } else {
      const errorResponse = new ErrorHandler("Booking not found :", 404);
      errorResponse.sendResponse(res);
    }
  } catch (error) {
    const errorResponse = new ErrorHandler("Something went wrong :", 404);
    errorResponse.sendResponse(res);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await Booking.findOne({ _id: id });
    if (booking) {
      const deleteBooking = await Booking.findByIdAndDelete({ _id: id });
      const successResponse = new SuccessHandler(
        "Booking deleted successfully",
        200,
        { deleteBooking }
      );
      successResponse.sendResponse(res);
    } else {
      const errorResponse = new ErrorHandler("Booking not found :", 404);
      errorResponse.sendResponse(res);
    }
  } catch (error) {
    const errorResponse = new ErrorHandler("Something went wrong :", 404);
    errorResponse.sendResponse(res);
  }
};
