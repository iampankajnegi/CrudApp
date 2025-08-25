import express from "express";
import {DeleteProduct, ProductCreate, ProductUpdate , GetProduct} from "../Controller/Prod.js";
import authMiddleware from "../middleware/Autherization.js";
const ProductRouter = express.Router();


ProductRouter.post("/createProduct/:userId" ,authMiddleware, ProductCreate)
ProductRouter.put("/updateProduct/:id" ,authMiddleware, ProductUpdate)
ProductRouter.delete("/DeleteProduct/:id" ,authMiddleware, DeleteProduct)
ProductRouter.get ("/GetProduct/:userId", GetProduct)

export default ProductRouter