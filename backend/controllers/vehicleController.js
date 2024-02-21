const Vehicle = require("../models/VehicleModel");
const ErrorHandler = require("../util/errorhandler");
const SuccessHandler = require("../util/successhandler");
const ApiFeatures = require("../util/ApiFeatures");

exports.addVehicle = async (req, res, next) => {
  try {
    const Veh_number = req.body.Veh_number;
    const existingVehicle = await Vehicle.findOne({ Veh_number: Veh_number });

    if (existingVehicle) {
      const errorResponse = new ErrorHandler("Vehicle Already exists", 409);
      errorResponse.sendResponse(res);
    } else {
      const vehicle = await Vehicle.create(req.body);
      const successResponse = new SuccessHandler(
        "Vehicle Added successfully",
        200,
        { vehicle }
      );
      successResponse.sendResponse(res);
    }
  } catch (err) {
    const errorResponse = new ErrorHandler("Vehicle Not Added", 500);
    errorResponse.sendResponse(res);
  }
};

exports.getAllVehicle = async (req, res, next) => {
  try {
    const vehiclesCount = await Vehicle.countDocuments();

    const apifeature = new ApiFeatures(Vehicle.find(), req.query)
      .Searchbrand()
      .SearchCategory()
      .filter();

    const vehicles = await apifeature.query;

    const filteredvehiclescount = vehicles.length;

    const successResponse = new SuccessHandler("All Vehicles Fetched", 200, {
      vehiclesCount,
      filteredvehiclescount,
      vehicles,
    });
    successResponse.sendResponse(res);
  } catch (err) {
    const errorResponse = new ErrorHandler("Vehicles Not found", 500);
    errorResponse.sendResponse(res);
  }
};

exports.getVehicleDetails = async (req, res, next) => {
  try {
    const id = req.params.id;
    const vehicle = await Vehicle.findById(id);

    if (vehicle) {
      const successResponse = new SuccessHandler(
        "Vehicle details Fetched",
        200,
        { vehicle }
      );
      successResponse.sendResponse(res);
    } else {
      const errorResponse = new ErrorHandler("Vehicle Not Found", 404);
      errorResponse.sendResponse(res);
    }
  } catch (err) {
    const errorResponse = new ErrorHandler("Vehicle Not Found", 500);
    errorResponse.sendResponse(res);
  }
};

exports.updateVehicle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const vehicle = await Vehicle.find({ _id: id });
    if (vehicle) {
      const updatedVehicle = await Vehicle.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      const successResponse = new SuccessHandler(
        "Vehicle updated Successfully",
        200,
        { updatedVehicle }
      );
      successResponse.sendResponse(res);
    } else {
      const errorResponse = new ErrorHandler("Vehicle Not Found", 404);
      errorResponse.sendResponse(res);
    }
  } catch (error) {
    const errorResponse = new ErrorHandler("Something went wrong", 500);
    errorResponse.sendResponse(res);
  }
};

exports.deleteVehicle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const vehicle = await Vehicle.find({ _id: id });
    if (vehicle) {
      const deletedVehicle = await Vehicle.findByIdAndDelete({ _id: id });
      const successResponse = new SuccessHandler(
        "Vehicle deleted Successfully",
        200,
        { deletedVehicle }
      );
      successResponse.sendResponse(res);
    } else {
      const errorResponse = new ErrorHandler("Vehicle Not Found", 404);
      errorResponse.sendResponse(res);
    }
  } catch (error) {
    const errorResponse = new ErrorHandler("Something went wrong", 500);
    errorResponse.sendResponse(res);
  }
};
