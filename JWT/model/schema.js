const mongoose = require("mongoose")

const firstSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    }

  
})

const Schema = mongoose.model("JWT",firstSchema)

module.exports = Schema