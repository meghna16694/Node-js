const express = require("express")
const route = express.Router()
const ctl = require("../controller/indexCtl")
const upload = require("../multer/multer")

route.get("/",ctl.getRecord)

route.post("/addRecord",upload,ctl.addRecord)
route.delete("/deleteData",ctl.deleteData)
route.put("/updateRecord",upload, ctl.updateRecord)

module.exports = route;