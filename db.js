
const mongoose = require("mongoose");


// Listen for database connection events
mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected Successfully");
});

mongoose.connection.on("error", (error) => {
    console.log("MongoDB Connection Error:", error);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Database connection established");
    })
    .catch((error) => {
        console.log("Database connection failed:", error);
    });
