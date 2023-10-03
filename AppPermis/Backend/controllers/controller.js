const postModel = require("../models/post.model");


// fetch every product 

module.exports.allPosts = async (req, res) => {
    try {
        const docs = await postModel.find().sort({ createdAt: -1 });
        res.status(200).send(docs);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        res.status(500).send("Erreur lors de la récupération des données : " + error.message);
    }
};

module.exports.addPost = async (req, res) => {
    const newPost = new postModel({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    })

    try {
        const post = await newPost.save()
        return res.status(201).json(post);    
    } catch (err) {
        return res.status(400).json({message : err });
    
    }
}
