'use strict';
module.exports = (sequelize, DataTypes) => {
  const Painting = sequelize.define('Painting', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    size: DataTypes.STRING,
    price: DataTypes.FLOAT,
    hoursOfLabour: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  Painting.associate = function(models) {
    // associations can be defined here
  };
  return Painting;
};