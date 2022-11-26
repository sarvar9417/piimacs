const { jwt, config } = require("../packages");
const { User } = require("../models/models");
module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; // "Bearer TOKEN"
    if (!token) {
      return res.status(401).json({ message: "Вы не авторизованы" });
    }
    const decoded = jwt.verify(
      token,
      config.get("JWT_SECRET"),
      {},
      (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Вы не авторизованы" });
        }
        return decoded;
      }
    );

    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Вы не авторизованы" });
  }
};
