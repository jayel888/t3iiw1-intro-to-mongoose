// Seed values into the database

const { createPost } = require("../controllers/PostController");
const { dbConnect, dbDisconnect } = require("./database");

async function seed() {
    await dbConnect();
    console.log("Connected to the Database. Seeding now...");

    await createPost("Important Post", "This is really important!");

    console.log("Seeding complete. Disconnecting...");

    await dbDisconnect();

    console.log("Disconnected!");
}

seed();

// dbConnect().then(() => {
//     console.log("Connected to the Database. Seeding now...");
//     seed();
// })