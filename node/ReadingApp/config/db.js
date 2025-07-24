const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGOOSE_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => {
      console.error("MongoDB connection failed", err);
      process.exit(1);
    });
};

module.exports = connectDB;