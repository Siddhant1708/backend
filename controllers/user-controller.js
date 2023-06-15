const User = require("../model/User")

const functions = {
     getAllUser: async(req,res,next)=>{
        let users;
        try{
            users=await User.find()
        }catch(err){
            console.log(err);
        }
        if(!users){
            return res.status(404).json({message: "No user found"});
        }
        return res.status(200).json({users});
    },
     signup:async (req,res,next)=>{
        const {name,email,password}=req.body;
        let existingUser;
        try{
            existingUser=await User.find({email});
            // console.log(existingUser)
        }catch(err){
            return console.log(err);
        }
        if(existingUser.length != 0){
            return res.status(400).json({existingUser});
        }
        const user=new User({
            name,
            email,
            password
        })
        try{
            await user.save();
        }
        catch(err){
            return console.log(err);
        }   
        return res.status(201).json({message: "User succesfully created"});
    },
    
     login:async (req,res,next)=>{
        const {email,password}=req.body;
        let existuser;
        try{
            existuser=await User.find({email,password});
        }catch(err){
            return console.log(err);
        }
        if(existuser.length==0){
            return res.status(400).json({message: "No User found,Kindly signup"})
        }
        return res.status(201).json({message: "User found"});
    }
}

module.exports = functions;