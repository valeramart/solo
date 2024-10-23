require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtConfig = require("../configs/jwtConfig"); //! не забыть проверить пути

const { SECRET_ACCESS_TOKEN, SECRET_REFRESH_TOKEN } = process.env;

const generateToken = (payload) => ({
  // payload - полезная нагрузка
  accessToken: jwt.sign(payload, SECRET_ACCESS_TOKEN, jwtConfig.access),
  refreshToken: jwt.sign(payload, SECRET_REFRESH_TOKEN, jwtConfig.refresh),
});

module.exports = generateToken;
