// const Product = require("../models/Product");

// // @desc    Get all products
// // @route   GET /api/products
// // @access  Public
// const getProducts = async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// };

// // @desc    Add new product
// // @route   POST /api/products
// // @access  Private/Admin
// const addProduct = async (req, res) => {
//   const { name, description, price, image } = req.body;

//   const product = new Product({ name, description, price, image });
//   const createdProduct = await product.save();
//   res.status(201).json(createdProduct);
// };

// module.exports = { getProducts, addProduct };
