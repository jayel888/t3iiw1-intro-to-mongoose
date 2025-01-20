const mongoose = require("mongoose");
const { PostModel } = require("../models/PostModel");
const { UserModel } = require("../models/UserModel");


// Function to connect to the DB
async function dbConnect(){
    let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;
    await mongoose.connect(databaseUrl);
    console.log(databaseUrl);
    console.log("Database connected.");
}

async function dbDisconnect() {
    // await mongoose.disconnect();
    await mongoose.connection.close();
}

async function dbDrop() {
    await mongoose.connection.db.dropDatabase();
}

module.exports = {
    dbConnect, dbDisconnect, dbDrop
};