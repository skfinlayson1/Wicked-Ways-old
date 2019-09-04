const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin-controller");
const validations = require("./validations");

router.get("/admin", adminController.index);
router.post("/admin/add-product",
    validations.addProductValidations,
    validations.imageValidator,
    validations.validator,
    adminController.addProduct);

module.exports = router;