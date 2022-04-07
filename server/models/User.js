const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: true
        },
    }, {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    };
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('age').get(function() {
    let diff = Date.now() - this.createdAt;
    let s = diff/1000;
    let m = Math.floor(s/60)
    let r = Math.floor(s - (m * 60))
    if (r < 10) {
        r = '0' + r
        
    }
    return m + ':' + r
});

const User = model('User', userSchema);

module.exports = User;