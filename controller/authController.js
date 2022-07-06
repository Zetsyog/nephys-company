var bcrypt = require('bcrypt'),
    Model = require('../model/models.js')


module.exports.registerUser = function (req, res) {
    var email = req.body.email
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var password1 = req.body.password1
    var password2 = req.body.password2

    if (!firstname || !lastname || !email || !password1 || !password2) {
        req.flash('error', "Please, fill in all the fields.")
        res.redirect('/register')
    }

    if (password1 !== password2) {
        req.flash('error', "Please, enter the same password twice.")
        res.redirect('/register')
    }

    var salt = bcrypt.genSaltSync(10)
    var hashedPassword = bcrypt.hashSync(password1, salt)

    var newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        salt: salt,
        password: hashedPassword
    }

    Model.User.create(newUser).then(function () {
        res.redirect('/')
    }).catch(function (error) {
        req.flash('error', "Please, choose a different username.")
        res.redirect('/register')
    })
}