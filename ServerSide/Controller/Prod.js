import ProductModal from "../Model/Product.js";

const ProductCreate = async (req ,res)=>{
    try {

        const {userId} = req.params;
        const {title , description , image_Url} = req.body ;

        if(!title || !description || !image_Url || !userId){

             return res.status(300).json({success:false , message : "All Feild are Required"})

        }

        const CreateProduct = new ProductModal({title , description , image_Url , userId})

        const newProduct = await CreateProduct.save();
        return res.status(200).json({success:true , message : "Product Created Successfully", product : newProduct})



    }catch (error) {

         res.status(500).json({success:false , message: "Internal server error:"})
    }
}


const ProductUpdate = async (req, res)=>{

    try{

        const {id} = req.params ;
        const {title , description, image_Url} = req.body ;

        const updateProduct = await ProductModal.findByIdAndUpdate(id , {title , description , image_Url} , {new : true})

        if(!updateProduct){

            return res.status(404).json({success:false , message:"Product not found "})        
    }

    return res.status(200).json ({success:true , message:"Product Updated Successfully",product : updateProduct})
    }
    catch(error){

        res.status(500).json ({success:false , message:"Internal server error"})
    }


}


const DeleteProduct = async (req,res)=>{

    try{

         const {id} = req.params ;
         const deleteProduct = await ProductModal.findByIdAndDelete(id);

         if(!deleteProduct){

            return res.status(404).json({success:false , message:"product not found "})
         }

         return res.status(200).json({success:true , message:"product deleted successfully " ,product : deleteProduct})
    
    
        }
        catch(error){

             res.status(500).json({success:false , message:"Internal server error"})
        }
}

const GetProduct = async (req, res)=>{

      try{
          
        const {userId} = req.params ;
        const products = await ProductModal.find({userId});

        return res.status(200).json({success:true , products})

      }
      catch(error){

         res.status(500).json({success:false , message:"Internal server error "})
      }
}

export {ProductCreate , ProductUpdate , DeleteProduct , GetProduct}