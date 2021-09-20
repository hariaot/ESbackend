const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Advisor = require('../models/Advisor');
const Cpp = require('../models/Cpp');
const Student = require('../models/Student');


const connection = new Sequelize(dbConfig);


Advisor.init(connection);
Cpp.init(connection);
Student.init(connection);

module.exports = connection;