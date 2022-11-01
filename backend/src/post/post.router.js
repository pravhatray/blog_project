const express = require("express");
const Post = require("./post.schema");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
const Authmiddleware = require("../middleware/Authentication");
const WriterAutMiddleware = require("../middleware/Authorization");

const app = express.Router();



// ############## Home page post ###################

app.get("/all", async (req, res) => {
    try {
        const allPost = await Post.find().populate("userId");
        return res.status(200).send(allPost)
    } catch (er) {
        return res.status(404).send("Something went wrong")
    }
})

// ################### Post related to selected author ################### 

app.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let post = await Post.find({ userId: id }).populate("userId")
        res.status(200).send(post)
    } catch (er) {
        return res.status(404).send({ msg: er })
    }
})

// ################### Get Post when user click on any particular post ##############

app.get("/single/:id", async (req, res) => {

    const { id } = req.params;
    console.log(id)
    try {
        let post = await Post.findById(id)
        res.status(200).send(post)
    } catch (er) {
        return res.status(404).send({ msg: er })
    }
})

// ###################### Create post by Creator ################


app.post("/", Authmiddleware, WriterAutMiddleware, async (req, res) => {
    const token = req.headers.authorization;
    const data = jwt.decode(token, secretKey);
    try {
        const post = new Post({ ...req.body, userId: data.id })
        await post.save();
        res.send("Post created Successfully")
    } catch (er) {
        res.status(400).send({ msg: er })
    }
})


// #################### Delete particular post by Creator #######################

app.delete("/:id", Authmiddleware, WriterAutMiddleware, async (req, res) => {
    let { id } = req.params
    let unique = req.headers.unique;

    const token = req.headers.authorization;

    const data = jwt.decode(token, secretKey);

    try {
        if (data.id === unique) {
            let afterDelete = await Post.findByIdAndDelete(id);
            res.status(200).send(afterDelete);
        }
        else {
            res.status(401).send("You are not the owner of this blog")
        }

    } catch (e) {
        res.status(401).send(e.message);
    }
});

// ################## Edit only by creator ###################

app.patch("/:id", Authmiddleware, WriterAutMiddleware, async (req, res) => {
    let { id } = req.params
    let unique = req.headers.unique;

    const token = req.headers.authorization;

    const data = jwt.decode(token, secretKey);

    try {

        if (data.id === unique) {
            let afterUpdate = await Post.findByIdAndUpdate(id, { $set: { content: req.body.content } }, { new: true });
            res.status(200).send(afterUpdate);
        }
        else {
            res.status(401).send("You are not the owner of this blog so you can't update")
        }

    } catch (e) {
        res.status(401).send(e.message);
    }
});


// #################### admin can delete any blog ####################### 

app.delete("/:id", async (req, res) => {
    const token = req.headers.authorization;
    let data = jwt.decode(token, secretKey);
    if (data.role === "Admin") {
        try {
            const id = req.params.id;
            let afterDelete = await Post.findByIdAndDelete(id);
            return res.status(200).send(afterDelete);
        } catch (e) {
            res.status(401).send(e.message);
        }
    } else {
        return res.status(401).send("You can't perform this operation only admin can perform it.")
    }

});





module.exports = app;