
import mongoose from "mongoose";


const ConnectionDB = async()=>{

    try{

        await mongoose.connect(process.env.Mongo_DB ,{

            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
           
        
    )

    console.log("Database Connected Successfully")
    }
    catch(error){

        console.log("Error while connecting to database" , error.message)
    }
}


export default ConnectionDB