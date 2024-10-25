const express = require("express");
const bcrypt = require("bcrypt");
const productRouter = express.Router();
const { verifyRefreshToken , verifyAccessToken} = require("../middleware/verifyToken");
const { checkReq } = require("../middleware/commons");
const { User, Product, Basket } = require("../../db/models");

productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ "error:": error.message });
  }
});

productRouter.post("/new", async (req, res) => {
  try {
    const { title, text, img, price } = req.body;
    const newEntrie = await Product.create({ title, text, img, price });
    res.json(newEntrie);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ошибка создания одной записи:", error.message);
  }
});

productRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    await Product.destroy({ where: { id } })
    res.status(200).send('Запись успешно удалена.')
  } catch (error) {
    console.log(error)
    res.status(500).send('Ошибка удаления одной записи:', error.message)
  }
})

productRouter.post("/:id", verifyRefreshToken, async (req, res) => {
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


module.exports = productRouter;
