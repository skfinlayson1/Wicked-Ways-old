

module.exports = {

    init(app) {
        
        const homeRoutes = require("../routes/home_routes");
        const adminRoutes = require("../routes/admin_routes");

        app.use(homeRoutes);
        app.use(adminRoutes);

    }

}