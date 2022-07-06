const express = require("express");
var passport = require('passport');
const {
    registerUser
} = require('../controller/authController.js');
const { protectRoute } = require("../auth/protect");


var router = express.Router();

router.get('/', protectRoute, (req, res) => {
    res.render("index.ejs", { name: req.user.name })
})

router.get('/login', (req, res) => {
    res.render('login.ejs')
})


router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/register', (req, res) => {
    res.render('register.ejs')
})

router.post('/register', registerUser)

router.delete('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/login')
    })
})

module.exports = router;