const { DataTypes } = require('sequelize');

/**
 * User attributes
 * Represent a general User
 * There are 4 types of Users: admin, pilote, delegate, student
 */
var attributes = {
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  account_type: {
    type: DataTypes.ENUM("admin", "pilote", "delegate", "student"),
    defaultValue: "student"
  },
  password: {
    type: DataTypes.STRING,
  },
  salt: {
    type: DataTypes.STRING
  },
  promotion: {
    type: DataTypes.STRING
  },
  centre: {
    type: DataTypes.STRING
  },
  assigned_promotions: {
    type: DataTypes.JSON
  }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options