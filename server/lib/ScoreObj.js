class ScoreObj {
    constructor(userID, type, guesses, word, createdAt) {
        this.userID = userID;
        this.type = type;
        this.guesses = guesses;
        this.word = word;
        this.createdAt = createdAt
    }
};

module.exports = ScoreObj;