const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

// GET a product by name
router.get('/:name', async (req, res) => {
    const product = await Product.findOne({ name: req.params.name });
    if (!product) {
        return res.status(404).send('Product not found');
    }
    res.send(product);
});

// POST a new product
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.send(savedProduct);
    } catch (err) {
        if (err.code == 11000) {
            return res.status(400).send('Product already exists');
        } else {
            return res.status(400).send('An error occurred while saving the product');
        }
    }
});


// PUT (update) a product by name
router.put('/:name', async (req, res) => {
    const updatedProduct = await Product.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
    if (!updatedProduct) {
        return res.status(404).send('Product not found');
    }
    res.send(updatedProduct);
});


// DELETE a product by name
router.delete('/:name', async (req, res) => {
    const deletedProduct = await Product.findOneAndDelete({ name: req.params.name });
    if (!deletedProduct) {
        return res.status(404).send('Product not found');
    }
    res.send(deletedProduct);
});

router.delete('/', async (req, res) => {
    const deletedProducts = await Product.deleteMany();
    res.send(deletedProducts);
});

module.exports = router;
