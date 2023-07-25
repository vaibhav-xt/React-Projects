const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://VaibhavMaurya:vaibhav5437@cluster0.3bsjtnt.mongodb.net/pizza-application"

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log("Mongo db connected")
})

db.on('error', () => {
    console.log("Mongo Failed")
})

module.exports = mongoose;