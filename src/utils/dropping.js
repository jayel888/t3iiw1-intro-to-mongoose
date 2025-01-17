// Drop values into the database

const { dbConnect, dbDisconnect, dbDrop } = require("./database");

async function drop() {
    // await dbConnect();
    await dbDrop();

    await dbDisconnect();

    console.log("Disconnected!");
}

// seed();

dbConnect().then(() => {
    console.log("Connected to the Database. Dropping now...");
    drop();
});