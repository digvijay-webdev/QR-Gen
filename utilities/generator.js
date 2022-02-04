const QR = require("qrcode");

const generateTxt = (response, data) => {
    QR.toDataURL(data, (err, url) => {
        if (err) response.send(err);
        response.json({
            status: 200,
            payload: url
        });
    })
}


module.exports = {
    generateTxt
}