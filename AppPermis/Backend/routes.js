// Import
const router = require("express").Router();
const {hello} = require("./controller.js");

// destination

router.get("/", hello);


// export

module.exports = router