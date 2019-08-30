const path = require("path");
const fs = require("fs");

const productQueries = require("../db/queries.product");

module.exports = {

    index(req, res, next) {

    },

// addProduct
    addProduct(req, res, next) {

        // Collect values from the body
        const textValues = {}
        for (let keys in req.body) {
            textValues[keys] = req.body[keys];
        }

        // Translate name into a proper folder name and specify the new directory
        const newFolderName = textValues.name.split(" ").join("_");
        const newPath = path.join(__dirname, "../", `images/artwork/${newFolderName}`);

        // Check if directory exists
        fs.readdir(newPath, (err, data) => {
            if (err) {

                // if no directory exists, create new directory
                fs.mkdir(newPath, () => {

                    for (let objKey in req.files) {

                        const tempImagePath = req.files[objKey].path;
                        const ext = path.extname(tempImagePath)
                        const imageName = req.files[objKey].fieldName;

                        // Store the main image under a constant filename to easily find later on
                        if (objKey === "mainImage") {

                            fs.renameSync(tempImagePath, `${newPath}/main_image${ext}`)
            
                        // Create a file for all additional images
                        } else {
                            fs.renameSync(tempImagePath,`${newPath}/${imageName}${ext}`)
                        }
                    }

                    // Store values in database if no errors were blown
                    productQueries.addProduct(textValues, newPath, (err, data) => {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(data);
                        }
                    })

                })
            // if directory exists return an error
            } else {
                res.json("ERROR: Name already exists!")
            }
        })
    }

}