const { Schema, model } = require('mongoose');

const ScoresSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
    },

    guesses: {
        type: Number,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },


});


const Scores = model('Scores', ScoresSchema);

module.exports = Scores;