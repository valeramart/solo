const { Product } = require('../../db/models')

async function getLatestProduct(req, res, next) {
  try {
    const { title, text, price } = await Product.findOne({ 
      order: [['createdAt', 'DESC']] 
    })
    // * мы запишем эти данные в объект приложения locals
    res.locals.product = { title, text, price }
    next()
  } catch (error) {
    console.log(error)
    res.status(500).send('Ошибка получения последней записи', error.message)
  }
}

module.exports = getLatestProduct;