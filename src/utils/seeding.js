// Seed values into the database

const { createPost, getPost, getPosts } = require("../controllers/PostController");
const { dbConnect, dbDisconnect } = require("./database");

async function seed() {
    await dbConnect();
    console.log("Connected to the Database. Seeding now...");

    await createPost("Important Post", "This is really important!");

    let getPostResult = await getPost({title: "Important Post"});
    console.log(getPostResult.content)

    console.log("Seeding complete. Disconnecting...");

    await dbDisconnect();

    console.log("Disconnected!");
}

seed();

// dbConnect().then(() => {
//     console.log("Connected to the Database. Seeding now...");
//     seed();
// })