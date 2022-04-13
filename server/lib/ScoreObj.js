class ScoreObj {
    constructor(userId, type, guesses, word, createdAt) {
        this.userId = userId;
        this.type = type;
        this.guesses = guesses;
        this.word = word;
        this.createdAt = createdAt
    }
};

module.exports = ScoreObj;