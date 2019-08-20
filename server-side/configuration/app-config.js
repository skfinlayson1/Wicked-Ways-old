const path = require("path");

module.exports = {

    init(app, express) {

        app.use(express.static(path.join(__dirname, "../", "../", "client-side", "build")))

    }

}