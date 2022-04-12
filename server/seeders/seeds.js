const db = require('../config/connection');
const User = require('../models/User');

db.once('open', async () => {
    await User.deleteMany({});
    let users = [];
    // for (let i = 0; i < 10; i++) {
    //     let user = new User() 
    // }

    await User.collection.insertMany()
});