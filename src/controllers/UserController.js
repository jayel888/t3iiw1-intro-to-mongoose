// Provide CRUD functionality for the UserModel

const { UserModel } = require("../models/UserModel.js")

async function createUser(username, email, isOver18) {
    let result = await UserModel.create({
        username: username,
        email: email,
        isOver18: isOver18
    });

    return result;
}

async function getUser(query) {
    // let result = await UserModel.findOne({key: value})
    let result = await UserModel.findOne(query);

    return result;
}

async function getUsers(query) {
    let result = await UserModel.find(query);

    return result;
}

async function updateUser() {}

async function updateUsers() {}

async function deleteUser() {}

async function deleteUsers() {}

module.exports = {
    createUser, getUser, getUsers, updateUser, updateUsers, deleteUser, deleteUsers
}