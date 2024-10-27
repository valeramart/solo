
  function checkId(req, res, next) {
    const { id } = req.params
    if (Number(id)) {
      next()
    } else {
      res.status(400).send(`Неверный тип данных для id. Отработала мидлварка!!!`)
    }
  }
  
  function checkReq(req, res, next) {
    const {  email: emailQuery, name: nameQuery, password: passwordQuery } = req.query
    const { email: emailBody, name: nameBody, password: passwordBody } = req.body
    if ((emailQuery && nameQuery && passwordQuery) || (emailBody && nameBody && passwordBody)) {
      next()
    } else {
      res.status(409).send('Все поля должны быть заполнены. Отработала мидлварка!')
    }
  }
  
  module.exports = { checkId, checkReq }
  