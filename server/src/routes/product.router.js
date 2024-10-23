const express = require('express');
const bcrypt = require('bcrypt');
const productRouter = express.Router();
const { User, Product } = require('../../db/models');

productRouter.post('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ 'error:': error.message }); 
    }
});