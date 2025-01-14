// Purpose of this file

// First point of entry
// Initialise the server
// Get the port
// Tell the server to listen to the incoming traffic

// Server is configured in this file
const { app } = require("./server.js");

// Get the PORT
const PORT = process.env.PORT || 3005;

// Listen to the PORT
app.listen(PORT, () => {
    // Server is running at this point
    console.log("Server is running on port: " + PORT)
})