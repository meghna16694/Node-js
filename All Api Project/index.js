const express = require("express")

const port = 2001;
const db = require("./config/db")

const app = express()

app.use(express.urlencoded())
app.use("/",require("./route/adminRoute"))

app.listen(port,(err)=>{
    err? console.log(err) : console.log("port connected : " ,port)
})