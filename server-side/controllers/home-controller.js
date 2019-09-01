const path = require("path");
const fs = require("fs");

const productQueries = require("../db/queries.product");

module.exports = {

// homePage -------------------------------------------------------
    homePage(req, res, next) {
        res.sendFile(path.join(__dirname, "../", "../", "build", "index.html"))
    },

// homeArtwork ----------------------------------------------------
    homeArtwork(req, res, next) {
        
        productQueries.findAll((err, images) => {
            if (err || !images) {
                res.json(err);
            } else {
                const imagesArray = [];

                images.forEach((img) => {
                    
                    imagesArray.push({
                        id: img.id,
                        name: img.name,
                        description: img.description,
                        type: img.type,
                        quantity: img.quantity,
                        size: img.size,
                        price: img.price,
                        hoursOfLabour: img.hoursOfLabour,
                        mainImageURL: img.mainImageURL,
                        createdAt: img.createdAt
                    }) 

                })
                
                res.json(imagesArray);
            }
        })

    }

}