const express = require('express');


const CppController = require('./Controllers/CppController');
const AdvisorController = require('./Controllers/AdvisorController');
const StudentController = require('./Controllers/StudentController');
const ReportController = require('./Controllers/ReportController');
const StatementController = require('./Controllers/StatementController');

const routes = express.Router();

routes.post('/advisors', AdvisorController.create);
routes.get('/advisors', AdvisorController.read);
routes.put('/advisors/:id_advisor', AdvisorController.update);
routes.delete('/advisors/:id_advisor', AdvisorController.delete);

routes.post('/students', StudentController.create);
routes.get('/students', StudentController.read);
routes.put('/students/:id_student', StudentController.update);
routes.delete('/students/:id_student', StudentController.delete);

routes.post('/cpps', CppController.create);
routes.get('/cpps', CppController.read);
routes.put('/cpps/:id_cpp', CppController.update);
routes.delete('/cpps/:id_cpp', CppController.delete);

routes.post('/reports', ReportController.create);
routes.get('/reports', ReportController.read);
routes.put('/reports/:id_report', ReportController.update);
routes.delete('/reports/:id_report', ReportController.delete);

routes.post('/statements', StatementController.create);
routes.get('/statements', StatementController.read);
routes.put('/statements/:id_statement', StatementController.update);
routes.delete('/statements/:id_statement', StatementController.delete);


module.exports = routes;