import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

 const UserModal = mongoose.model("User" , UserSchema);

 export default UserModal ;

