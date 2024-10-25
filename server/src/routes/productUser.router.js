const express = require("express");
const bcrypt = require("bcrypt");
const productUserRouter = express.Router();
const { verifyRefreshToken , verifyAccessToken} = require("../middleware/verifyToken");
const { checkReq } = require("../middleware/commons");
const { User, Product, Basket } = require("../../db/models");

productUserRouter.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ "error:": error.message });
  }
});


productUserRouter.post("/:id", verifyRefreshToken, async (req, res) => {
  try {
    const { id } = req.params
    const { user } = res.locals
    const newBasket = await Basket.create({ productId: id, userId: user.id });
    res.json(newBasket);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ошибка добавления в избранное:", error.message);
  }
});


module.exports = productUserRouter;
