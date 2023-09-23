let express = require("express");
let router = express.Router();

router.get("/", (req,res,next) => {
    res.sendFile(__dirname + "/static/index.html");
});

router.get("/mobile",(req,res,next) => {
    res.sendFile(__dirname+"/static/mobile.html");
});

router.get("/desktop",(req,res,next) => {
    res.sendFile(__dirname + "/static/desktop.html");
});

router.get("/test",(req,res,next) => {
    res.sendFile(__dirname + "/static/test-1.html");
});

module.exports = router;