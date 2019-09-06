const express = require("express");

const productsController = require("../controllers/products_controller");

const router = express.Router();

router.get("/products/:id", productsController.show);

module.exports = router;