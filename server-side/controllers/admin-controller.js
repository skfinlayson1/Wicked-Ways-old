const cloudinary = require("cloudinary").v2;

const productQueries = require("../db/queries.product");

module.exports = {

    index(req, res, next) {

    },

// addProduct ----------------------------------------------------------------------------
    addProduct(req, res, next) {

        const files = req.files;
        const body = req.body;
        const folderName = body.name.split(" ").join("_")
        const mainImage = files.mainImage;
        let mainImageURL;
        const extraImagesCount = Object.keys(files).length - 1;

        try {
            // Upload the main image with a constant name so it can be easily found.
            cloudinary.uploader.upload(mainImage.path, {folder : folderName, public_id: "main_image"}, (err, image) => {
                if (err) {
                    throw err;
                }
                // Set the url to the main image.
                mainImageURL = image.secure_url;
                // Set a counter to track when the last image is uploaded so we can queue the database.
                // Loop through all the additional images and upload them.
                let uploadCount = 0;
                let imageNumber = 0;
                for (let oKey in files) {
                    if (oKey !== "mainImage") {
                        // Increment imageNumber per pass so each image has an easily found filename i.e. "image0, image1"
                        imageNumber ++
                        cloudinary.uploader.upload(files[oKey].path, {folder : folderName, public_id: "image" + imageNumber}, (err, image) => {
                            uploadCount++;
                            if (err) {
                                throw err;
                            } else if (uploadCount === extraImagesCount)  {
                                // Add values to the database.
                                productQueries.addProduct(body, mainImageURL, extraImagesCount, (err, response) => {
                                    if (err) {
                                        res.json(err);
                                    } else {
                                        res.json(response);
                                    }
                                })
                            }
                        });
                    }
                }
            })
        }
        catch(error) {
            res.json(error);
        }

    }

}