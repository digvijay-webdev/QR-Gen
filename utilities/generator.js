const QR = require("qrcode");
const multer = require("multer");


// configuring multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/uploads");
    },

    filename: (req, file, cb) => {
        const ufName = file.fieldname + Math.round(Math.random() * 1E9);
        cb(null, ufName);
    }
});

// configuring multer's upload function
const upload = multer({
    storage: storage,

    // size limit
    limits: {
        fieldNameSize: 300,
        fileSize: 524288 // 5 MB
    },

    // file filter
    fileFilter: (req, file, cb) => {
        // throwing error if the file type does not match
        const allowedFileTypes = [".png", ".jpg", ".jpeg", ".gif", ".svg"];
        if (!(allowedFileTypes.includes(Path.extname(file.originalname)))) {
            return cb(new Error('Invalid File Format Rejected.'));
        }

        // refuse request if overload is detected
        const fileSize = parseInt(req.headers['content-length']);
        if (fileSize > 524288) {
          return cb(new Error('File size is over the allowed limit'));
        }


        // if everything goes well
        cb(null, true);
    }
});



const generateTxt = (response, data) => {
    QR.toDataURL(data, (err, url) => {
        if (err) {
            response.send(err);
        } else {
            response.json({
                status: 200,
                payload: url
            });
        }
    });
}

const generateFile = (response, data) => {

}


module.exports = {
    generateTxt,
    generateFile,
    upload
}