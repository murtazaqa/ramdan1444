const mongoose = require("mongoose");
const countersModel = require("../models/countersModel");

const connectDB = async () => {
  try {
    const database = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("MongoDB connected");
    console.log("DB Counters initialization, if not already");
    countersModel
      .insertMany([{ _id: "ZM" }])
      .catch((e) => console.log("Counter already present!!!", e.message));
    countersModel
      .insertMany([{ _id: "BH" }])
      .catch((e) => console.log("Counter already present!!!", e.message));
    countersModel
      .insertMany([{ _id: "JM" }])
      .catch((e) => console.log("Counter already present!!!", e.message));
    countersModel
      .insertMany([{ _id: "RECEIPTS" }])
      .catch((e) => console.log("Counter already present!!!", e.message));
  } catch (error) {
    console.log(`Error connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
