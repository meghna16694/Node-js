const express = require("express")
const route = express.Router()
const aCtl = require("../controller/adminCtl")

route.get("/login",aCtl.login)
route.post("/registerUser",aCtl.registerUser)
route.get("/allRecord", aCtl.allRecord)


module.exports = route