// const { rawListeners } = require("../Models/ChatModel");
const ChatModel = require("../Models/ChatModel");

const createChat = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const result = await newChat.save();
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).send(chat);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const findChat = async (req, res) => {
  try {
    const getChat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secId] },
    });
    res.status(200).send(getChat)
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = { createChat, userChats, findChat };
