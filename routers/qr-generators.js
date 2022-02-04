// this file will handle all the QR Code requests
const router = require("express").Router();
const { generateTxt } = require("../utilities/generator");

router.post("/gen/text", (req, res) => {
    if (req.body.text) {
        generateTxt(res, req.body.text);
    } else {
        res.json({
            status: 0,
            message: "Text field cannot be empty."
        });
    }
});


module.exports = router;
