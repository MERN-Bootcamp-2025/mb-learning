const Products = require("../models/Products");

exports.addProduct = (req, res) => {
  const { title, price, isVeg } = req.body;

  const product = new Products({ title, price, isVeg });

  product
    .save()
    .then((savedProduct) => {
      res.status(201).json({
        message: "Product is created and saved succssfully",
        data: savedProduct,
      });
    })
    .catch((err) => {
      console.error("Error occured while saving: ", err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    });
};

exports.updateProduct = (req,res) =>{
    const productId = req.params.id;
    const updateData = req.body;

    Products.findByIdAndUpdate(productId, updateData, {new: true})
    .then(updatedProduct => {
        if(!updatedProduct){
            return res.status(404).json({
                message: "Product not found"
            })
        }

        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        });
    })
    .catch(err => {
        console.error("Product not updated",err);
        res.status(500).json({
            message: "Internal Server error"
        });
    });
};

exports.deleteProductById = (req,res) =>{
    const productId = req.params.id;

    Products.deleteOne({_id: productId})
    .then(result => {
        if(result.deletedCount === 0){
            res.status(404).json({
                message:"Product not found"
            });
        };

        res.status(200).json({
            message:"Product deleted successfully"
        });
    })
    .catch(err=>{
        console.error("Error deleting product", err);
        res.status(500).json({
            message:"Internal Server Error"
        });
    });
};

exports.findProductByIdAndDelete = (req,res)=>{
    const productId = req.params.id;

    Products.findByIdAndDelete(productId)
    .then(deletedProduct=>{
        if(!deletedProduct){
            res.status(404).json({
                message:"Product not found!"
            });
        }

        res.status(200).json({
            message:"Product deleted successfully"
        })
    })
    .catch(err=>{
        console.error("Error occured while deleting",err);
        
        res.status(500).json({
            message:"Internal Server Error"
        })
    })
};

exports.deleteAllProducts = (req,res)=>{
    const confirm = req.query.confirm === 'true';

    if(!confirm){
        return res.status(400).json({
            message: `Set ?confirm=true to delete all the products intentionally`
        })
    }
    Products.deleteMany({})
    .then(result=>{
        res.status(200).json({
            message:`Delete ${result.deletedCount} products successfully`
        });
    })
    .catch(err=>{
        console.error("Error occured while deleting all the produts");
        res.status(500).json({
            message:"Internal Server Error"
        })
    });
};