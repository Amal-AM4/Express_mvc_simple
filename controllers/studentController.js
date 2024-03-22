const { Student } = require('../models');

async function getAllStudents (req, res) {
    try {
        const students = await Student.findAll();
        res.render('student', { students });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error'});
    }
}

async function createStudent (req, res) {
    try {
        const { name, email, age } = req.body;
        await Student.create({ name, email, age });
        res.redirect('/display');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error'});
    }
}

async function registrationForm (req, res) {
    res.render('form');
}

async function deleteStudent (req, res) {
    try {
        const { id } = req.params;
        await Student.destroy({ where: { id } });
        res.redirect('/display');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}



module.exports = { getAllStudents, createStudent, registrationForm, deleteStudent };