const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: { type: String, require },
    lastName: { type: String, require },
    email: { type: String, require },
    address: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false }
}, {
    timestamps: true
})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel