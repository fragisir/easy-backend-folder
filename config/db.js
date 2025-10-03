const mongoose = require("mongoose");

const connectDB = () => {
  console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

module.exports = connectDB;
