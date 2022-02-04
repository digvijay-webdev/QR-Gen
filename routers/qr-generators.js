// this file will handle all the QR Code requests
const router = require("express").Router();
const { generateTxt, generateFile, upload } = require("../utilities/generator");



router.post("/gen/text", (req, res) => {
    if (req.body.text) {
        generateTxt(res, req.body.text);
    } else {
        res.json({
            status: 400,
            message: "Text field cannot be empty"
        });
    }
});


router.post("/gen/buff", upload.single("xyz123qwerty"), (req, res) => {
    res.send("puff..");
});

module.exports = router;
