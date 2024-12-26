const adminSchema = require("../model/adminSchema")
let bcrypt = require("bcrypt.js")
let jwt = require("jsonwebtoken")

module.exports.allRecord = async(req,res) =>{
    let data = await schema.find({})
    data && res.status(200).json({data:data})
}

module.exports.registerUser = async(req , res) =>{
    let user = await adminSchema.findOne({email:req.body.email})

    if(user){
        return res.status(200).json({msg:"user already exists"})
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)

    await adminSchema.create(req.body).then((data)=>{
        res.status(200).json({msg:"user added"})
    })
}

module.exports.login = async(req,res) =>{
    let user  = await adminSchema.findOne({email:req.body.email})

    if(user) {
        if(await bcrypt.compare(req.body.password,user.password)){
            let token = jwt.sign({userData : user},"rnw",{expiresIn:"1h"})
          token && 
          res.status(200).json({msg:"user login successfully",token:token})
        }else{
            res.status(400).json({msg:"password is wrong"})
        }
        
    }else{
        res.status(400).json({msg:"user not found"})
    }
}