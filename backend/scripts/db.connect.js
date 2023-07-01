const mongoose = require("mongoose");

const connectToDatabase = () => {
  const DB_URL = process.env.DB_URI;

  mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("✅ Database Connected!");
    })
    .catch((err) => {
      console.log("DB connect error:", err);
    });
};

module.exports = connectToDatabase;
