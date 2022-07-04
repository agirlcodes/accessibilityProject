const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: String,
    email: String,
    userpassword: Schema.Types.Mixed,
    // userpassword: String,
    userType: Admin
})

const Users = mongoose.model('users', userSchema)

module.exports = Users;