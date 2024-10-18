const express = require("express");

const port = 4004;


const app = express();

const db = require("./config/db")
const adminSchema = require("./config/dbSchema")
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))



app.get("/",async(req,res)=>{
    let data = await adminSchema.find({})
    console.log(data)
  data && res.render("index",{data})
})

app.get("/deleteData",async(req,res)=>{
    console.log(req.query)

    let deleteRecord = await adminSchema.findByIdAndDelete(req.query.id)

    deleteRecord && res.redirect("back")
})

app.get("/editData",async(req,res)=>{
    let data = await adminSchema.find({})
    let singleData = data.find((item)=> item.id == req.query.id)
    singleData && res.render("edit",{singleData})
})

app.post("/update",async(req,res)=>{
    console.log(req.body)
    let data = await adminSchema.findByIdAndUpdate(req.body.id,{
        name : req.body.name,
        subject : req.body.subject,
        city : req.body.city,
    });
    data ? res.redirect("/") : console.log("gdghdhgd");
})

app.post("/insert",async(req,res)=>{
    let data = await adminSchema.create(req.body)
    data &&  res.redirect("/")
})

app.listen(port,(err)=>{
    err?console.log(err) : console.log("port started" , port);
    
})