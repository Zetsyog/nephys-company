if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}



const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
var { User } = require('./model/models.js')

setupPassport = require('./auth/passport.js')

const users = []


app.set('view-engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET || "s3cr3t",
    resave: false,
    saveUninitialized: false
}))

setupPassport(app)
app.use(methodOverride('_method'))
app.use(express.static("public"))

app.use("/", require("./routes/login"));
app.use("/company", require("./routes/company"));

// TODO remove for prod
var salt = bcrypt.genSaltSync(10)
var hashedPassword = bcrypt.hashSync("password", salt)

User.sync().then(() => {

    User.findOrCreate({
        where: {
            id: 0
        },
        defaults: {
            id: 0,
            firstname: "Admin",
            lastname: "Admin",
            email: "admin@admin.com",
            salt: salt,
            password: hashedPassword,
            account_type: "admin"
        }
    })

})
// end TODO

app.listen(3000)
