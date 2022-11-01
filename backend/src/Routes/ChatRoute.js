const express=require("express")
const { createChat, userChats, findChat } = require("../Controllers/ChatController.js")

const router =  express.Router()

router.post("/",createChat)
router.get("/:userId",userChats)
router.get("/find/:firstId/:secId",findChat)

module.exports=router
