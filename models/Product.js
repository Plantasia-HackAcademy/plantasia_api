const { Model, DataTypes } = require("sequelize");

class Product extends Model {
    static initModel(sequelize) {
        Product.init(
            {
                id: {
                    type: DataTypes.BIGINT.UNSIGNED,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                name: {
                    type: DataTypes.TEXT("tiny"),
                    allowNull: false,
                },
                description: {
                    type: DataTypes.TEXT(1000),
                    allowNull: false,
                },
                image: {
                    type: DataTypes.TEXT("tiny"),
                    allowNull: false,
                },
                stock: {
                    type: DataTypes.TINYINT,
                    allowNull: false,
                    defaultValue: 0,
                },
                price: {
                    type: DataTypes.FLOAT(5, 2),
                    allowNull: false,
                    defaultValue: 0,
                },
                trending: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                slug: {
                    type: DataTypes.TEXT("tiny"),
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: "product",
            },
        );
        return Product;
    }
}

module.exports = Product;
