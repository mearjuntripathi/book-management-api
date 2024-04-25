// user collection
const mongoose = require('./db');

// Define User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true }, // Make username unique
    password: String
});


const User = mongoose.model('users', userSchema);

module.exports = User;