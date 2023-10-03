// Import
const router = require("express").Router();
const {allPosts, addPost} = require("../controllers/controller.js");

// destination

    //get


router.get("/", allPosts);


    //post

router.post("/", addPost);



// export

module.exports = router