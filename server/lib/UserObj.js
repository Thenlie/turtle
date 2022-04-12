class UserObj {
    constructor(username, email, password, country, date) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.country = country;
        this.createdAt = date;
    }
};

module.exports = UserObj;