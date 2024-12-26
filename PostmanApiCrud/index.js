const express = require("express")

const port = 1008;
const path = require("path")
const db = require("./config/db")
const app = express()


app.use(express.urlencoded())
app.use("/",require("./route/route"))
app.use("uploads/",express.static(path.join(__dirname,"/uploads")))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started")
})