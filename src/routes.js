const express = require('express');


const CppController = require('./Controllers/CppController');
const AdvisorController = require('./Controllers/AdvisorController');
const StudentController = require('./Controllers/StudentController');

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

module.exports = routes;