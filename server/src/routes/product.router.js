const express = require("express");
const bcrypt = require("bcrypt");
const productRouter = express.Router();
const { checkReq } = require("../middleware/commons");
const { User, Product } = require("../../db/models");

productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ "error:": error.message });
  }
});

// productRouter.get("/new", checkReq, async (req, res) => {
//   try {
//     const { title, text, img, price } = req.query;
//     const newProduct = await Product.create({ title, text, img, price });
//     res.json(newProduct);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Ошибка создания одной записи:", error.message);
//   }
// });

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

module.exports = productRouter;
