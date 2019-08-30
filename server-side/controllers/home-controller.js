const path = require("path");
const fs = require("fs");

const productQueries = require("../db/queries.product");

module.exports = {

// homePage
    homePage(req, res, next) {
        res.sendFile(path.join(__dirname, "../", "../", "build", "index.html"))
    },

// homeArtwork
    homeArtwork(req, res, next) {
        const image1 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/main_image.jpg"));
        const image2 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/image1.jpg"));
        const image3 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/image2.jpg"));
    
        const img = Uint8Array.from(image1).join(" ");
        const img2 = Uint8Array.from(image2).join(" ");
        const img3 = Uint8Array.from(image3).join(" ")
    
        res.send([img,img2,img3]);
    }

}