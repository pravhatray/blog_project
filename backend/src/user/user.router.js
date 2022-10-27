const express = require("express")
const jwt = require("jsonwebtoken");
const UserModel = require("./user.schema");
require('dotenv').config();
const secretKey = process.env.SECRET_KEY
const refreshKey = process.env.REFRESH_KEY;
const Authmiddleware = require("../middleware/Authentication")


const app = express.Router()

app.get("/", Authmiddleware, async(req, res) => {
    let a=await UserModel.find()
   return  res.send(a)
})

app.post("/signup", async (req, res) => {
    let { name, email, password, role } = req.body;
    let user = await UserModel.findOne({ email })
    console.log(user)
    try {
        if (user) {
            return res.status(400).send("This email is already in use try another email")
        }
        let newUser = new UserModel({ name, email, password, role })
        await newUser.save();
        console.log(newUser)
        res.status(200).send(newUser)
        
    } catch (er) {
        return res.status(500).send(er.message)
    }
})

app.post("/refresh", async (req, res) => {

    const refreshToken = req.headers.authorization;
    try {
        const data = jwt.verify(refreshToken, refreshKey, { expiresIn: "7 days" })
    } catch (er) {
        return res.status(400).send(er)
    }


})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password })
    if (!user) {
        return res.status("Invalid Credentials")
    }
    const token = jwt.sign({ id: user._id, email: user.email, name: user.name, role: user.role }, secretKey, { expiresIn: "1 day" })

    const refreshToken = jwt.sign({}, refreshKey, { expiresIn: "7 days" })

    res.status(200).send({ msg: "Login success fully created", token: token, rtoken: refreshToken , user:user.name, _id:user._id})
})



module.exports = app;