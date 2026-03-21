const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// CORS configuration
app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Middleware (JSON parsing)
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
