
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const userRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// CRUD routes
app.use("/", userRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Hello Taj");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
