const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    email: {
        type : String,
        required : true
    },
})

const admin = mongoose.model("passportsetup",Schema)

module.exports = admin