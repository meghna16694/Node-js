const express =require("express");
const port = 2013;

const app = express();
app.set("view engine" , "ejs");
app.use(express.urlencoded());

let students = [
    {  
        id:1,
        name:"Meghna",
        subject:"Eng",
        city:"Rajkot"
    },

    {  
        id:2,
        name:"Darshit",
        subject:"React",
        city:"Junagadh"
    },

    {  
        id:3,
        name:"Saxi",
        subject:"node",
        city:"Ahmedabad"
    },

    {  
        id:4,
        name:"Ankit",
        subject:"CSS",
        city:"Surat"
    }
]

app.get("/",(req,res)=>{
    res.render("index",{students});
})

app.post("/insert",(req,res)=>{
    req.body.id = students.length+1
    students.push(req.body)
    res.redirect("back")
})

app.get("/delete",(req,res)=>{
    let data = students.filter((item)=>
    item.id != req.query.Id)
    students = data
    res.redirect("back")
})

app.get("/edit",(req,res)=>{
    let singleData = students.find((item)=>
        item.id == req.query.Id)
    if (singleData) {
        res.render("edit",{singleData})
    }else{
        console.log(err);
        
    }
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
    err ? console.log(err) : console.log("port started : " + port)
})