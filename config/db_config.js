const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DATABASE IS CONNECTED :${conn.connection.host}`.bgGreen.black);
  } catch (error) {
    console.log(`DB CONNECTION FAILED :${error.message}`.bgRed.black);
  }
};

module.exports = connectDB;
