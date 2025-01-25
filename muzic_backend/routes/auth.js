const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const User=require("../Models/User")
const {getToken}=require("../utils/helper")
const BadRequest = require("../errors/bad-request")
const UnauthenticatedError = require("../errors/unauthenticated")


router.post("/register",async (req,res)=>{

    const {email, password,firstname,lastname,username}=req.body;

    const user=await User.findOne({email:email})
    if (user){
        return res
            .status(403)
            .json({error:"this email is already registered"});  
    }

    const hashedPassword=await bcrypt.hash(password,10);
    const newUserData={
        email,
        password:hashedPassword,
        firstname,
        lastname,
        username
    };
    const newUser=await User.create(newUserData);


    const token= await getToken(email,newUser);


    const userToReturn= {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
})


router.post("/login",async (req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email:email})
    if (!user){
        throw new BadRequest('No such user exist')
    }


    const isPasswordValid=await bcrypt.compare(password,user.password);
    if (!isPasswordValid){
        throw new UnauthenticatedError('Wrong Password')
    }

    const token=await getToken(user.email,user);
    const userToReturn = { ...user.toJSON(), token }
    delete userToReturn.password
    return res.status(200).json(userToReturn)
})

module.exports=router;