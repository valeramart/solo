const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.router");
const tokensRouter = require("./routes/token.router");
const productRouter = require('./routes/product.router');
const productUserRouter = require('./routes/productUser.router');
const basketRouter = require('./routes/basket.router');

const cors = require("cors");

const app = express();

app.use(
  cors({
    credentials: true, // я ошибочно написал withCredentials
    origin: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", authRouter);
app.use("/api/tokens", tokensRouter);
app.use('/api/products', productRouter);
app.use('/api/productsUser', productUserRouter);
app.use('/api/basket', basketRouter);

module.exports = app;
