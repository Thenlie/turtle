const db = require('../config/connection');
const UserObj = require('../lib/UserObj');
const ScoreObj = require('../lib/ScoreObj');
const { Scores, User } = require('../models');
const { faker } = require('@faker-js/faker');
const { getFakeUser, getFakeScore } = require('../utils/helpers');

db.once('open', async () => {
    await Scores.deleteMany({});
    await User.deleteMany({});
    
    // create 10 fake users
    let users = [];
    for (let i = 0; i < 10; i++) {
        let user = await getFakeUser()
        users.push(user); 
    };

    await User.collection.insertMany(users);
    
    // create 5 fake scores for each fake user
    let newUsers = await User.find();
    for (let i = 0; i < newUsers.length; i++) {
        let scores = [];
        for (let j = 0; j < 5; j++) {
            let word = '';
            while (word.length !== 5) {
                word = faker.random.word().toUpperCase();
            };
            let score = new ScoreObj(
                newUsers[i]._id, 
                'cont', 
                Math.floor(Math.random() * 6) + 1, 
                word
            );
            scores.push(score);
        }
        await Scores.collection.insertMany(scores);
    }
    
    console.log('Seeding complete');
    process.exit(0);
});