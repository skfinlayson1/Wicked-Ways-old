// Modules
const express = require("express");

// Local Modules
const appConfig = require("./configuration/app-config");
const routeConfig = require("./configuration/route-config");

const app = express();

// configure app
appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;