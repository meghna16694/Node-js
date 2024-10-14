

const express = require("express");
const port = 2012;
const path = require("path")




const app = express();
app.set("view engine","ejs")
app.use(express.urlencoded())
app.use("/public",express.static(path.join(__dirname,"public")))





let students = [
    {
        id :1,
        name:"Meghna",
        subject:"eng",
        city: "Rajkot",
        age:25,

    },
    {
        id :2,
        name:"Meghna",
        subject:"eng",
        city: "Rajkot",
        age:28,

    },
    {
        id :3,
        name:"Meghna",
        subject:"eng",
        city: "Rajkot",
        age:30,

    },
]

const middle = (req, res, next) => {
    const  age  = req.body.age;
    if (age < 18) {
      
        res.render("index", { students });
    } else {
        next();
    }
};

app.get("/",(req,res)=>{
    res.render("index",{students})
})

app.post("/insert",middle,(req,res)=>{
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


app.post("/update",middle,(req,res)=>{
    students.map((e,i)=>{
        if(e.id == req.body.id){
            e.id = req.body.id
            e.name = req.body.name
            e.subject = req.body.subject
            e.city = req.body.city
            e.age = req.body.age
        }else{
            e
        }
    })
    res.redirect("/")
})
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("port started" + port)
})