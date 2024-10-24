
  function checkId(req, res, next) {
    const { id } = req.params
    if (Number(id)) {
      next()
    } else {
      res.status(400).send(`Неверный тип данных для id. Отработала мидлварка!!!`)
    }
  }
  
  function checkReq(req, res, next) {
    const { text: textQuery, title: titleQuery, price: priceQuery } = req.query
    const { text: textBody, title: titleBody, price: priceBody } = req.body
    if ((textQuery && titleQuery && priceQuery) || (textBody && titleBody && priceBody)) {
      next()
    } else {
      res.status(409).send('Все поля должны быть заполнены. Отработала мидлварка!')
    }
  }
  
  module.exports = { checkId, checkReq }
  