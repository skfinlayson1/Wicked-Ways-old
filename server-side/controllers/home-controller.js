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
        // const image1 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/main_image.jpg"));
        // const image2 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/image1.jpg"));
        // const image3 = fs.readFileSync(path.join(__dirname, "../", "/images/artwork/Abigail_Ratchford/image2.jpg"));
    
        // const img = Uint8Array.from(image1).join(" ");
        // const img2 = Uint8Array.from(image2).join(" ");
        // const img3 = Uint8Array.from(image3).join(" ")
    
        // res.send([img,img2,img3]);

        productQueries.findAll((err, data) => {
            if (err || !data) {
                res.json(err || "No images found.");
            } else {
                imageObject = {};

                data.forEach((image, index) => {
                    const imageName = image.name.split(" ")[0] + index;
                    const ext = path.extname(fs.readdirSync(image.imagePath)[0])

                    imageObject[imageName] = {
                        id: image.id,
                        name: image.name,
                        description: image.description,
                        type: image.type,
                        quantity: image.quantity,
                        size: image.size,
                        price: image.price,
                        hoursOfLabour: image.hoursOfLabour,
                        location: image.imagePath,
                        ext,
                        mainImage: fs.readFileSync(path.join(image.imagePath, "/main_image" + ext))
                    }

                })
                console.log(imageObject);
                res.json(imageObject);
            }
        })



    }

}