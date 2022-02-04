// this file will serve all the view-engin files
const router = require("express").Router();


router.get("/", (req, res) => {
    res.render("index");
});

router.get("/upload", (req, res) => {
    res.render("upload");
});


module.exports = router;
