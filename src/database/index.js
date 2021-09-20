const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Advisor = require('../models/Advisor');
const Cpp = require('../models/Cpp');
const Student = require('../models/Student');
const Report = require('../models/Report');
const Statement = require('../models/Statement');

const connection = new Sequelize(dbConfig);


Advisor.init(connection);
Cpp.init(connection);
Student.init(connection);
Report.init(connection);
Statement.init(connection);

module.exports = connection;