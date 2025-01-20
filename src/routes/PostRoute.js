const express = require("express");
const { getPost, getPosts } = require("../controllers/PostController");

const router = express.Router();

// Create Post

// Get posts based on query
router.get("/search/query", async (request, response) => {
    // Get the query from the request body
    let query = request.body.query;
    
    // Use the query in the POST CRUD operation
    let result = await getPost(query);

    // Return the result
    response.json({
        data: result
    });
});


// Get one post by ID
router.get("/search/:postId", async (request, response) => {
    console.log("Getting post with ID: " + request.params.postId);

    let result = await getPost({_id: request.params.postId});
    console.log("Found it: " + result);

    response.json({
        data: result
    });
});

// Get all posts
router.get("/all", async (request, response) => {
    let result = await getPosts({});
    console.log("All posts: " + JSON.stringify(result));

    response.json({
        data: result
    })
})



module.exports = router;