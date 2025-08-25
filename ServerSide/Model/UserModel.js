import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
 {
    userName : {

        type:String,
        required: true ,
        unique : true 
    } ,
    
    email : {

        type:String ,
        required : true ,
        unique : true
    } ,

    password : {
        type : String ,
        required : true
    }
 } ,

 {
    timestamps : true 
 })

 


 UserSchema.pre("save" ,async function(next){

    if(!this.isModified("password")) return next(); // check for user  is new or modified password

    try{

        const salt = await bcrypt.genSalt(10);

        this.password = await bcrypt.hash(this.password,salt);

        next();
    }

    catch(err){
        next(err);
    }
 })


 UserSchema.methods.ComparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword , this.password);

 }

 UserSchema.methods.generateAuthToken = function(){
    return jwt.sign({_id: this.id} , process.env.JWT_SECRET , {expires:"1d"})
 }

 const UserModal = mongoose.model("User" , UserSchema);

 export default UserModal ;

