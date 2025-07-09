const express = require("express");
const router = express.Router();
const adminController = require('../controllers/adminController')

router.post('/addProduct', adminController.addProduct);

//POST
// router.post("/product", async (req, res) => {
//   const { title } = req.body;

//   if (!title) {
//     return res.status(400).json({ error: "Title is required" });
//   }
//   try {
//     const product = await Product.create({ title });
//     res.status(201).json({ message: "Product added", product });
//   } catch (err) {
//     res
//       .status(500)
//       .json({ error: "Failed to add product", details: err.message });
//   }

// We used getDb() to access the database.

// Inserted one product using .insertOne() from the native MongoDB driver.

// Used .then() and .catch() for Promises.

// Responded with status 201 Created.

//    const db= getDb();
//    const product = {title};

//    db.collection('products')
//       .insertOne(product)
//       .then(result=>{
//         res.status(201).json({
//             message: 'Product Added',
//             productId: result.insertedId,
//         })
//       })
//       .catch(err=>{
//         console.error('Insert Failed', err);
//         res.status(500).json({error: 'Failed to add product'});        
//       })
// });

//PUT
// router.put("/product/:id", async (req, res) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     if (!product) return res.status(404).json({ error: "Product not found" });

//     product.title = req.body.title;
//     await product.save();
//     res.json({ message: "Product updated", product });
//   } catch (err) {
//     res.status(500).json({ error: "Update Failed", details: err.message });
//   }
// });

//DELETE
// router.delete("/product/:id", async (req, res) => {
//   try {
//     const rowsDeleted = await Product.destroy({ where: { id: req.params.id } });
//     if (!rowsDeleted)
//       return res.status(404).json({ error: "Product not found" });

//     res.json({ message: "Product deleted" });
//   } catch (err) {
//     res.status(500).json({ error: "Delete failed", details: err.message });
//   }
// });



module.exports = router;
