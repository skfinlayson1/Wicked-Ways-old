const express = require("express");
const router = express.Router();

const adminRoutes = require("../controllers/admin-controller");

router.get("/admin", adminRoutes.index);
router.post("/admin/add-artwork", adminRoutes.uploadImage);

module.exports = router;