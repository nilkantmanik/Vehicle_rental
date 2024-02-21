const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `MONGODB connected successfully, HOST : ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log(`MONGODB connection failed : ${error}`);
    process.exit(1);
  }
};

// here updated

module.exports = connectDB;
