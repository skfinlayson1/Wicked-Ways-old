const express = require("express");
const path = require("path");
const fs = require("fs");
const buffer = require("buffer");
const request = require("request");

const homeController = require("../controllers/home-controller");

const router = express.Router();

router.get("/", homeController.homePage);

router.get("/home-artwork", homeController.homeArtwork);

router.get("/hello", (req, res) => {

    const obj = {};

    const image1 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/main_image.jpg"));
    const image2 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/image1.jpg"));

    obj.image1 = image1;
    obj.image2 = image2;

    res.type("image/jpg")
    res.send(image1);


    //res.sendFile(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/main_image.jpg"))

})

router.get("/hello2", (req, res) => {

    const image1 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/main_image.jpg"));
    const image2 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/image1.jpg"));
    const image3 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/image2.jpg"));

    console.log(image1.length);
    console.log(image2[0], image2[1], image2[3], image2[4]);
    console.log(image3.length);

    const img = Uint8Array.from(image1).join(" ");
    const img2 = Uint8Array.from(image2).join(" ");
    const img3 = Uint8Array.from(image3).join(" ")

    res.send([img,img2,img3]);

    //res.sendFile(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/main_image.jpg"))
})

module.exports = router;