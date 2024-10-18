const express = require("express")
const port = 6020;

const app = express()

const db = require("./config/db")
const adminSchema = require("./config/dbSchema")
app.set("view engine","ejs")

app.use(express.urlencoded())



app.get("/",async(req,res)=>{
    let data  = await adminSchema.find({})
    console.log(data)
    data && res.render("index",{data})
 })

app.get("/editData",async(req,res)=>{
    let data = await adminSchema.find({})
    let singleData = data.find((item)=> item.id == req.query.id )
    singleData && res.render("edit",{singleData})
})

app.post("/update",async(req,res)=>{
    console.log(req.body)
    let data  = await adminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/")
})



app.post("/insert",async(req,res)=>{
    let data = await adminSchema.create(req.body)
    data && res.redirect("/")
})

app.get("/deleteData",async(req,res)=>{
    let deleteRecord = await adminSchema.findByIdAndDelete(req.query.id)
    deleteRecord && res.redirect("back")
})



app.listen(port,(err)=>{
    err?console.log(err) : console.log("port started : " , port)
})