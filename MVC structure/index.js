const express = require("express")

const port = 2008;

const app = express()

const db = require("./config/db")

app.set("view engine" ,"ejs")

app.use(express.urlencoded())

app.use("/",require("./routes/index"))

app.listen(port ,(err)=>{
    err ? console.log(err) : console.log("port started : ",port)
})