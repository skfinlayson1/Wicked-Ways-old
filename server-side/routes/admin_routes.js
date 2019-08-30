const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin-controller");

router.get("/admin", adminController.index);
router.post("/admin/add-product", adminController.addProduct);

module.exports = router;