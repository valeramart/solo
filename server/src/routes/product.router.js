const express = require("express");
const bcrypt = require("bcrypt");
const productRouter = express.Router();
const { User, Product } = require("../../db/models");

productRouter.post("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ "error:": error.message });
  }
});

router.get("/new", checkReq, async (req, res) => {
  try {
    const { text, title, price } = req.query;
    const newProduct = await Product.create({ title, text });
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ошибка создания одной записи:", error.message);
  }
});

router.post("/new", checkReq, async (req, res) => {
  try {
    const { text, title, price } = req.body;
    const newProduct = await Product.create({ title, text });
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ошибка создания одной записи:", error.message);
  }
});
