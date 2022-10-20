const jwt = require("jsonwebtoken");
require('dotenv').config();
const secretKey = process.env.SECRET_KEY

const Authmiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(403).send("token is missing")
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (!err) {
            req.user = user;
            next()
        } else {
            return res.status(403).send({ message: "User not authenticated" })
        }
    })
}

module.exports = Authmiddleware;

