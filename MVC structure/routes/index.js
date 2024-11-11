const express = require("express")

const route = express.Router()
const indexCtl = require("../controller/indexCtl")

route.get("/",indexCtl.homePage)
route.post("/insert",indexCtl.addData)

module.exports = route
