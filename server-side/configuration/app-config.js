const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const formData = require("express-form-data");
const cloudinary = require("cloudinary").v2;

module.exports = {

    init(app, express) {

        app.use(express.static(path.join(__dirname, "../", "../", "client-side", "build")));
        app.use(cors());
        app.use(bodyParser.json());
        app.use(formData.parse());
        
        cloudinary.config({
            cloud_name: "wicked-ways",
            api_key: "898855627752421",
            api_secret: "7pRROOC1JkkdzeZ7YUVkcc2QsJ4" // FIX THIS!!!!!!!!!!!!!
        })

    }

}