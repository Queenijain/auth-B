const express = require("express");
const connectDB = require("./config/db_config");
const { errorHandler } = require("./middleware/errorHandler");
const colors = require("colors");
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5000;

// DB Connection
connectDB()

// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.json({
    msg: "WELCOME TO AUTH API",
  });
});

// User Routes
app.use("/api/user", require("./routes/userRoutes"));

// Error Handler
app.use(errorHandler);

// Server
app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`.bgBlue);
});
