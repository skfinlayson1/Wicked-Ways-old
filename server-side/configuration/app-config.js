if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const path = require("path");
const cors = require("cors");
const flash = require("flash");
const session = require("express-session");
const bodyParser = require("body-parser");
const formData = require("express-form-data");
const cloudinary = require("cloudinary").v2;

module.exports = {

    init(app, express) {
        app.use(cors());
        app.use(express.static(path.join(__dirname, "../", "../", "client-side", "build")));
        app.use(bodyParser.json());
        app.use(formData.parse());
        app.use(session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 1.21e+9 }
        }))
        app.use(flash());
        cloudinary.config({
            cloud_name: "wicked-ways",
            api_key: "898855627752421",
            api_secret: process.env.CLOUDINARY_SECRET
        })

    }

}