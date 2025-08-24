import UserModal from "../Model/UserModel.js";
import bcrypt from "bcryptjs";

const Register = async (req , res)=>{
    try { 
           
          const {userName , email , password} = req.body;

          if(!userName || !email || !password){

             return res.status(300).json({success:false , message : "All Feild are Required"})
          }

          const ExistingUser = await UserModal.findOne({userName})

          if(ExistingUser){

              return res.status(402).json({success:false,message : "User Already Exist Please Login"})
          }
            
          
          const user = new UserModal({userName , email , password})

          const newSavedUser = await user.save();

          return res.status(200).json({success:true , message : "User Registered Successfully" , user : newSavedUser})

              

    }


    catch (error) {

        res.status(500).json({success:false , message : "Internal server error"})


    }
}


const Login = async (req, res)=>{
    try{
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(300).json({success:false , message: "All Feild are Required"})
        }
        
        const userFind = await UserModal.findOne({email})
        if(!userFind){
            return res.status(404).json({success:false , message:"User Not Found Please Register"})
        }

        const isMatch = await userFind.ComparePassword(password);  
        if(!isMatch){  
                        
            return res.status(400).json({success:false , message:"Invalid credentials"})   
            
        }  

        return res.status(200).json({success:true, message:"Login successfull", user:userFind}) 
    }
    catch(error){
        res.status(500).json({success:false , message : " Intenal server error "}) 
    }
}




export {Register , Login}