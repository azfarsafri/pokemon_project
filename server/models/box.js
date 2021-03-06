'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Box.belongsTo(models.Trainer)
      Box.belongsTo(models.Pokemon)
    }
  };
  Box.init({
    TrainerId: DataTypes.INTEGER,
    PokemonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Box',
  });
  return Box;
};