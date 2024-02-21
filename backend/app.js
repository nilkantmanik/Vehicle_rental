const express = require("express");
const cors = require("cors");
const app = express();
const cloudinary = require("cloudinary").v2;
const fileupload = require("express-fileupload");
app.use(express.json());
cloudinary.config({
  cloud_name: "dwzfgqqnf",
  api_key: "361675465649429",
  api_secret: "7Cd0-TxzJ2DewH3tLbsmzWlbTsI",
  secure: true,
});
app.use(fileupload({ useTempFiles: true }));
app.use(cors());

// routes

const vehicleroute = require("./routes/Vehicleroute");
const userRoutes = require("./routes/UserRoute");
const bookingRoutes = require("./routes/bookingRoute");

// apis

app.use("/api/v1", vehicleroute);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/", bookingRoutes);

module.exports = app;
