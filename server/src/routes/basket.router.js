const express = require("express");
const bcrypt = require("bcrypt");
const basketRouter = express.Router();
const { checkReq } = require("../middleware/commons");
const { User, Product, Basket } = require("../../db/models");
const { verifyRefreshToken } = require("../middleware/verifyToken");

basketRouter.get("/", verifyRefreshToken, async (req, res) => {
  try {
    const { user } = res.locals
    const allProducts = await Basket.findAll( { 
      where: { userId: user.id },
      include: {
        model: Product
      }
    } );
    res.status(200).json({ allProducts});
  } catch (error) {
    res.status(500).json({ "ошибка получения информации из БД:": error.message });
  }
}); 


basketRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    // const { user } = res.locals
    await Basket.destroy({ where: { productId: id} })
    res.status(200).send('Запись успешно удалена.')
  } catch (error) {
    console.log(error)
    res.status(500).send('Ошибка удаления записи из избранного:', error.message)
  }
})


module.exports = basketRouter;