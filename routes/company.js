const express = require("express");
var passport = require('passport');
const {
    createCompany,
    updateCompany,
    deleteCompany,
} = require('../controller/companyController.js');
const { protectRoute } = require("../auth/protect");


var router = express.Router();

router.get('/', (req, res) => {
    // TODO render company list
})
router.get('/create', (req, res) => {
    // TODO render company create form
})
router.get('/update', (req, res) => {
    // TODO render company update form
})
router.get('/delete', (req, res) => {
    // TODO render company update form
})

// form actions
router.post('/create', createCompany)
router.patch('/update', updateCompany)
router.delete('/delete', registerUser)

module.exports = router;