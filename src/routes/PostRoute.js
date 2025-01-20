const express = require("express");
const { getPost, getPosts } = require("../controllers/PostController");

const router = express.Router();

// Create Post

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

// Get many posts

module.exports = router;