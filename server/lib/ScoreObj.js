class ScoreObj {
    constructor(userID, type, guesses, word) {
        this.userID = userID;
        this.type = type;
        this.guesses = guesses;
        this.word = word;
    }
};

module.exports = ScoreObj