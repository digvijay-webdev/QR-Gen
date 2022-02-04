const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const QR = require("qrcode");
const numOfCPUs = require("os").cpus().length;
const path = require("path");
require("dotenv").config();

const views = require("./routers/views");
const QRRequestHandler = require("./routers/qr-generators");


// express app init
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))


// modules
app.use(views);
app.use(QRRequestHandler);


// utilities
const clusterise = require("./utilities/cluster");



const port = process.env.PORT || process.env.LOCAL_PORT;
clusterise(port, numOfCPUs, app);