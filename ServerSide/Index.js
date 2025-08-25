import express from "express";

import ConnectionDB from "./libs/DB.js";
import AuthRouter from "./Routers/Auth.js"
import ProductRouter from "./Routers/Product.js"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config();

app.use(cors("*"))

const app = express();


const PORT = process.env.PORT 


// Data Base connect
ConnectionDB()

app.use(express.json());

app.use("/auth" , AuthRouter)
app.use("/product", ProductRouter)


app.listen(PORT , () => console.log(`Server is running ${PORT}`) )