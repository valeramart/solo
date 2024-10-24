const router = require('express').Router()

router.get('/products', (req, res) => {
  // * отсылаем ответ на клиент
  // * достаём данные из locals
  const { title, text, price } = res.locals.product
  res.send(`
  <link rel="stylesheet" href='/styles/style.css'/> 
  <script defer src='js/script.js' ></script>
  <h1 style='color:blue'>Elbrus Bootcamp</h1>
  <hr/>
  <img src='/img/austro.gif' alt='austro'/>
  <div id='dog'></div>
  <hr/>
  <h2>последняя созданная запись:</h2>
  <h3>${title}</h3>
  <h4>${text}</h4>
  <h5>${price}</h5>
  <hr/>
  <a href='/api/v1.0/entries'>Все записи</a>
  <a href='/api/v1.0/entries/1'>Первая запись из БД</a>
  <a href='/api/v1.0/entries/2'>Вторая запись из БД</a>    
  `)
})

module.exports = router