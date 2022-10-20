const express = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
const Authmiddleware = require("../middleware/Authentication");
const { findById, find } = require("./comment.schema");
const Comment = require("./comment.schema");


const app = express.Router();


// ################ comment for particular post ############### 

app.post("/", Authmiddleware, async (req, res) => {
    const { postid } = req.headers
    console.log(postid)
    const token = req.headers.authorization;
    const data = jwt.decode(token, secretKey);

    try {
        const post = new Comment({ ...req.body, name: data.name, userId: data.id, postId: postid })
        await post.save();
        res.send("Comment created Successfully")
    } catch (er) {
        res.status(400).send({ msg: er })
    }
})


// ################### show comment for particular post ################

app.get("/", async (req, res) => {
    const { postid } = req.headers

    try {
        console.log("Yes")
        const comment = await Comment.find({ postId: postid })
        res.send(comment)
    } catch (er) {
        res.status(400).send({ msg: er.message })
    }
})

// ######################### delete comment for particular post by logged in user #################

app.delete("/:id", Authmiddleware, async (req, res) => {
    let { id } = req.params
    const token = req.headers.authorization;
    const data = jwt.decode(token, secretKey);

    let comment = await Comment.findById(id)
    let unique = comment.userId.toString()

    try {
        if (data.id === unique) {
            console.log(data.id, "and", unique)
            let afterDelete = await Comment.findByIdAndDelete(id);
            res.status(200).send(afterDelete);
        }
        else {
            res.status(401).send("You are not the owner of this Comment so you can't delete this Comment")
        }

    } catch (e) {
        res.status(401).send(e.message);
    }
});


// ################## Edit only by user who have post the comment ###################

app.patch("/:id", Authmiddleware, async (req, res) => {
    let { id } = req.params
    const token = req.headers.authorization;
    const data = jwt.decode(token, secretKey);

    let comment = await Comment.findById(id)
    let unique = comment.userId.toString()

    try {
        if (data.id === unique) {
            let afterUpdate = await Comment.findByIdAndUpdate(id, { $set: { comments: req.body.comments } }, { new: true });
            res.status(200).send(afterUpdate);
        }
        else {
            res.status(401).send("You are not the owner of this Comment so you can't update")
        }

    } catch (e) {
        res.status(401).send(e.message);
    }
});




module.exports = app;