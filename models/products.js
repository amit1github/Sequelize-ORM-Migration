'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    customerId: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    totalAmount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};