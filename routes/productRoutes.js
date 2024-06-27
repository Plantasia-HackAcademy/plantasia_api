const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.showList);

module.exports = router;