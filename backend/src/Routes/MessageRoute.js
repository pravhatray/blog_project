const express=require("express")
const { sendMessage, getMessages } = require("../Controllers/MessageController.js")
const { route } = require("./ChatRoute")


const router=express.Router()

router.post("/",sendMessage)
router.get("/:chatId",getMessages)

module.exports=router