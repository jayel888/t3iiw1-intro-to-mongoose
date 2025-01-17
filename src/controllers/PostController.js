// Provide CRUD functionality for the PostModel

const { PostModel } = require("../models/PostModel")

async function createPost(title, content) {
    let result = await PostModel.create({
        title: title,
        content: content
        // Date has a default value
    });

    return result;
}

async function getPost(query) {
    // let result = await PostModel.findOne({key: value})
    let result = await PostModel.findOne(query);

    return result;
}

async function getPosts(query) {
    let result = await PostModel.find(query);

    return result;
}

async function updatePost() {}

async function updatePosts() {}

async function deletePost() {}

async function deletePosts() {}

module.exports = {
    createPost, getPost, getPosts, updatePost, updatePosts, deletePost, deletePosts
}