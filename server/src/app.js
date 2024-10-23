const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/token.router');

const app = express();

app.use(
    cors({
      credentials: true, // я ошибочно написал withCredentials
      origin: true,
    }),
  );
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/tokens', tokensRouter);


module.exports = app;