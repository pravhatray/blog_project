const MessageModel=require("../Models/MessageModel")

const sendMessage=async(req,res)=>{
const {chatId,senderId,text}=req.body
const message=new MessageModel({
    chatId,
    senderId,
    text
})
try{
const result=await message.save()
res.status(200).send(result)
}catch(e){
    res.status(500).send(e.message)
}
}

const getMessages=async(req,res)=>{
    const {chatId}=req.params
    try{
        const result=await MessageModel.find({
            chatId
        })
        res.status(200).send(result)
    }catch(e){
        res.status(500).send(e.message)
    }
}

module.exports={sendMessage,
    getMessages}