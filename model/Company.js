const { DataTypes } = require('sequelize');

var attributes = {
  name: {
    type: DataTypes.STRING
  },
  sector_activity: {
    type: DataTypes.STRING
  },
  locations: {
    type: DataTypes.JSON
  },
  intern_nb: {
    type: DataTypes.INTEGER
  },
}

var options = {
  freezeTableName: true,
  paranoid: true,
}

module.exports.attributes = attributes
module.exports.options = options