const mongoose = require("mongoose");

// Make a schema
// const titleSchema = new mongoose.Schema({
//     type: String,
//     required: true,
//     minLength: 10
// })
// const simpleSchema = new mongoose.Schema(objDefiningDataRules, SchemaOptions);
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 5
    },
    isOver18: {
        type: Boolean,
        required: true,
        default: false
    }
    });

// Make a model based on the schema
const UserModel = mongoose.model("User", UserSchema);
// Mongoose automatically looks for a collection with the plural lowercase name 'posts'

// Export the model for accessibility in other parts of the code
module.exports = {
    UserModel
}