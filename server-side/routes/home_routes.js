const express = require("express");
const path = require("path");
const fs = require("fs");
const buffer = require("buffer");
const request = require("request");

const homeController = require("../controllers/home-controller");

const router = express.Router();

router.get("/", homeController.homePage);
router.get("/home-artwork", homeController.homeArtwork);

router.get("/hello", (req, res, next) => {
    const image1 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/main_image.jpg"));
    const obj = {}
    obj.image = image1;
    res.json(obj);
})

module.exports = router;