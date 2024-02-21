const app = require('./app');
const connectDB = require("./db");
const dotenv = require("dotenv").config();


connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on PORT : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MONGODB connection failed, `, error);
  });
