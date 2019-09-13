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
    res.json("Hello");
})

module.exports = router;