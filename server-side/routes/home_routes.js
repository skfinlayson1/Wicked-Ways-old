const express = require("express");
const path = require("path");
const fs = require("fs");
const request = require("request");

const homeController = require("../controllers/home-controller");

const router = express.Router();

router.get("/", homeController.homePage);

router.get("/server", (req, res) => {
    res.json(__dirname);
})

router.get("/hello", (req, res) => {

    res.json(`${path.join(__dirname, "../", "images/artwork/image.jpg")}`)

    // fs.readFile(path.join(__dirname, "../", "images/artwork/image.jpg"), (err, content) => {
    //     res.writeHead(200,{'Content-type':'image/jpg'});
    //     res.end(content);
    // })

})

module.exports = router;