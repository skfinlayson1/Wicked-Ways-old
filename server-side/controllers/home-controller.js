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
        productQueries.findAll((err, products) => {
            if (err) {
                res.json(err);
            } else {
                const files = [];

                products.forEach((product) => {
                    const data = fs.readFileSync(product.imagePath)
                    files.push(data.toString());
                })
                
                res.json(files);
            }
        })
    }

}