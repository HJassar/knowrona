const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

//register new user

router.get("/register", (req, res) => {
    res.send("register here");
});

router.post("/register", (req, res) => {
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let newUser = new User({ username: userName, email: email });

    User.register(newUser, password, (err, user) => {
        if (err) console.log("error");
        passport.authenticate("local")(req, res, () => {
            console.log("new user added");
            res.redirect("/userName/profilePage");
        });
    });
});

//login
router.get("/login", (req, res) => {
    res.send("login here");
})

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/userName/profilePage",
        failureRedirect: "/login"
    }), (req, res) => { }
);

//logout
router.get("/logout", (req, res) => {
    req.logout();
    console.log("user logged out");
    res.redirect("/");
})


module.exports = router;
