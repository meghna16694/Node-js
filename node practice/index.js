

const express = require("express");
const port = 2038;



const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded())

let students = [
    {
        id :1,
        name:"Meghna",
        subject:"eng",
        city: "Rajkot"

    },
    {
        id :2,
        name:"Meghna",
        subject:"eng",
        city: "Rajkot"

    },
    {
        id :3,
        name:"Meghna",
        subject:"eng",
        city: "Rajkot"

    },
]

app.get("/",(req,res)=>{
    res.render("index",{students})
})

app.post("/insert",(req,res)=>{
 req.body.id = students.length+1;
 students.push(req.body)
 res.redirect("back")


})

app.get("/delete",(req,res)=>{
    let data = students.filter((item)=>
    item.id != req.query.Id);
    students=data
    res.redirect("back")
})

app.get("/edit/:id",(req,res)=>{
let singleData = students.find((item)=>
item.id == req.params.id)
   

   singleData && res.render("edit",{singleData})
})


app.post("/update",(req,res)=>{
    students.map((e,i)=>{
        if(e.id == req.body.id){
            e.id = req.body.id
            e.name = req.body.name
            e.subject = req.body.subject
            e.city = req.body.city
        }else{
            e
        }
    })
    res.redirect("/")
})
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("port started" + port)
})