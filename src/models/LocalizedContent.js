const { mongoose } = require("mongoose");

const LocalizedContentSchema = new mongoose.Schema({
    languageCode: {
        type: String,
        required: true,
        default: "en"
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = {
    LocalizedContentSchema
}