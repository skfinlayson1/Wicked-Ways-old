const express = require("express");
const path = require("path");

const homeController = require("../controllers/home-controller");

const router = express.Router();

router.get("/", homeController.homePage);

router.get("/hello", (req, res) => {
    const data = `{"hello": "world"}`;
    res.send(data) 
})

module.exports = router;