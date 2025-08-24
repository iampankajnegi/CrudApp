import express from "express";
import {DeleteProduct, ProductCreate, ProductUpdate , GetProduct} from "../Controller/Prod.js";

const ProductRouter = express.Router();


ProductRouter.post("/createProduct/:userId" , ProductCreate)
ProductRouter.put("/updateProduct/:id" , ProductUpdate)
ProductRouter.delete("/DeleteProduct/:id" , DeleteProduct)
ProductRouter.get ("/GetProduct/:userId", GetProduct)

export default ProductRouter