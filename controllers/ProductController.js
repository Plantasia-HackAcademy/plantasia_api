const { Product } = require("../models");

const ProductController = {
    showList: async (req, res) => {
        const products = await Product.findAll();
        return res.json({ Products: products });
    },
};

module.exports = ProductController;
