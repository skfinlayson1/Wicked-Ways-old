'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    size: DataTypes.STRING,
    price: DataTypes.FLOAT,
    hoursOfLabour: DataTypes.INTEGER,
    imagePath: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};