const express = require("express")
const cors = require("cors");
const Connect = require("./config/db");
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const userRouter = require("./user/user.router")
const postRouter = require("./post/post.router")
const commentRouter = require("./comment/comment.router")
const ChatRoute=require("./Routes/ChatRoute")
const MessageRoute=require("./Routes/MessageRoute")

const app = express();
app.use(cors())
app.use(express.json())

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)
app.use("/chats",ChatRoute)
app.use("/messages",MessageRoute)

app.get("/", (req, res) => {
    res.send("Welcome to apna blog")
})


app.listen(PORT, async () => {
    await Connect()
    console.log(`Server is running on port ${PORT}`)
})