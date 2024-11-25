const express = require("express")

const port = 2004

const app = express()

const db = require("./model/db")

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("port started :" ,port)
})