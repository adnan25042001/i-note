const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.mongoURI;

const connectToMongo = () => {
    console.log("connecting...");
    mongoose
        .connect(mongoURI)
        .then(() => console.log("Connected to mongo successfully..."))
        .catch(() => console.log("Connection failed!"));
};

module.exports = connectToMongo;
