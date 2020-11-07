const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const validateRegisterInput = require("../controllers/register");

// router is /auth

// Registration router
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    console.log(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User
        .findOne(
            { $or: [{ email: req.body.email }, { username: req.body.username }] })
        .then((user) => {
            if (user) {
                if (user.email === req.body.email) {
                    return res.json({ email: "Email already exists" });
                } else if (user.username === req.body.username) {
                    return res.json({ username: "Username already exists" });
                }
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                });

                // Hash password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(() => res.json({ isValid: isValid }))
                            .catch((err) => console.log(err));
                    });
                });
            }

        });
});

module.exports = router;
