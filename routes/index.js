const productRoutes = require("./productRoutes");

module.exports = (app) => {
    app.use("/products", productRoutes);
};
