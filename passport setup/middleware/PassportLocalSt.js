const passport = require("passport")
const localSt = require("passport-local").Strategy

let admin = require("../model/adminSchema")

passport.use("local",new localSt(
    {usernameField : "email"}, async(email,password,done)=>{
        let user = await admin.findOne({email : email})

        if(user){
             if(user.password == password){
                return done(null,user)
             }else{
                return done(null,false)
             }
        }else{
            return done(null,false)
        }
    }
))

passport.serializeUser((user,done)=>{
    return done(null,user.id)
})

passport.deserializeUser(async(id,done))=>{
    let user = await admin.findById(id)

    if(user){
        return done(null,user)
    }else{
        return done(null,false)
    }
}

module.exports = passport


