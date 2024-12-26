const express = require("express")

const route = express.Router()
const ctl = require("../controller/indexCtl")

route.get("/login", ctl.login)
route.post("/registerUser", ctl.registerUser)
route.get("/allRecord", ctl.allRecord)


module.exports = route