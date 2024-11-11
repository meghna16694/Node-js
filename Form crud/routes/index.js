const express = require("express")

const route = express.Router();

const indexCtl = require("../controller/indexCtl")

const upload = require("../middleware/multer")

route.get("/",indexCtl.homePage)
route.post("/insert",upload,indexCtl.addData)


module.exports = route;