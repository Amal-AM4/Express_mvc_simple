var express = require('express');
var router = express.Router();
const { getAllStudents, createStudent, registrationForm, deleteStudent } = require('../controllers/studentController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/display', getAllStudents);
router.get('/registration', registrationForm);
router.post('/create', createStudent);
router.post('/delete/:id', deleteStudent);

module.exports = router;
