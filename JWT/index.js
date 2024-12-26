const express = require("express")

const port = 1005;

const app = express()
const db = require("./config/db")

app.use(express.urlencoded())
app.use("/",require("./route/route"))

app.listen(port,(err)=>{
    err? console.log(err) : console.log("port connected ",port)
})