var UserMeta = require('./User.js')
var CompanyMeta = require('./Company.js')
var connection = require('../sequelize.js')

var User = connection.define('users', UserMeta.attributes, UserMeta.options)
var Company = connection.define('company', CompanyMeta.attributes, CompanyMeta.options)

// you can define relationships here
User.sync();
Company.sync();

module.exports.User = User;
module.exports.Company = Company