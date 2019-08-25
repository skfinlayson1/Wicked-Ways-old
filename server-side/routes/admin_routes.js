const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin-controller");

router.get("/admin", adminController.index);
router.post("/admin/add-artwork", adminController.uploadImage);
router.get("/something", (req, res) => {
    console.log("HERREEEEEEE")
})

module.exports = router;