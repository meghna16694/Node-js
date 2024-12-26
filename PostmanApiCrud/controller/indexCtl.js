let Schema = require("../model/schema")

module.exports.getRecord = async(req,res) =>{
    await Schema.find({}).then((data)=>{
        res.status(200).json({msg:"This is your data ",Record: data})
    })
}

module.exports.addRecord = async(req,res) =>{
    req.body.image = req.file.path
    await Schema.create(req.body).then((data)=>{
        res.status(200).json({msg: "Data added Successfully"})
    })
    console.log(req.body);
    
}

module.exports.deleteData = async(req,res)=>{
   let singleData = await Schema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    await Schema.findByIdAndDelete(req.query.id).then((data)=>{
        res.status(200).json({msg: "Data deleted"})
        console.log(req.body)
    })

}

    module.exports.updateRecord = async(req,res)=>{
        let img = ""
        let singleData = await Schema.findById(req.query.id)
        req.file ? img = req.file.path : img = singleData.image
        req.file && fs.unlinkSync(singleData.image)
        req.body.image = img
        await Schema.findByIdAndUpdate(req.query.id, req.body).then((data)=>{
            res.status(200).json({ msg: "Data updated successfully" })
          
        })
    
}

