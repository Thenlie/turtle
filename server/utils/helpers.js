const { faker } = require('@faker-js/faker');
const UserObj = require('../lib/UserObj');
const ScoreObj = require('../lib/ScoreObj');

const randomDate = () => {
    return new Date(
        2021,
        Math.floor(Math.random() * 11),
        Math.floor(Math.random() * 29)
    );
};

const randomCountry = () => {
    const countries = ['US', 'CA', 'MX', 'UK'];
    return countries[Math.floor(Math.random() * 4)];
};

const randomType = () => {
    const types = ['cont', 'daily'];
    return types[Math.floor(Math.random() * 2)];
};

module.exports = {
    getFakeUser: async function() {
        return new UserObj(
            faker.internet.userName(), 
            faker.internet.exampleEmail(), 
            'password', 
            randomCountry(), 
            randomDate()
        );
    },
    getFakeScore: async function(id) {
        let word = '';
        while (word.length !== 5) {
            word = faker.random.word().toUpperCase();
        };
        return new ScoreObj(
            id.toString(), 
            randomType(), 
            Math.floor(Math.random() * 6) + 1, 
            word,
            randomDate()
        );
    },
};