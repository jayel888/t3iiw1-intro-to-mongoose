// Seed values into the database

const { createPost, getPost, getPosts } = require("../controllers/PostController");
const { createUser } = require("../controllers/UserController");
const { dbConnect, dbDisconnect } = require("./database");

async function seed() {
    await dbConnect();
    console.log("Connected to the Database. Seeding now...");

    let newUser = await createUser("admin", "admin@example.com", true)

    console.log(newUser.id)
    
    await createPost(
        "Important Post", 
        "This is really important!",
        newUser.id    
    );
    await createPost(
        "Not so important Post", 
        "This is really not important!", 
        newUser.id
    );

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