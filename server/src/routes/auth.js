const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

// Create a user using: POST "/api/auth/signup". Doesn't require auth
router.post(
    "/signup",
    [
        body("name", "Enter a valid name").isLength({ min: 3 }),
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password must be at least 5 characters").isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        User.findOne({ email: req.body.email })
            .then((existingUser) => {
                if (existingUser) {
                    return res.status(400).json({
                        success: false,
                        error: "User already exists with this email",
                    });
                }

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: secPass,
                });

                newUser
                    .save()
                    .then(() => {
                        const data = {
                            user: {
                                id: newUser.id,
                            },
                        };
                        const authtoken = jwt.sign(data, JWT_SECRET);
                        res.json({
                            success: true,
                            authtoken: authtoken,
                            timeStamp: new Date(),
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).json({
                            success: false,
                            error: "Failed to create user",
                        });
                    });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({
                    success: false,
                    error: "An error occurred",
                });
            });
    }
);

router.post(
    "/login",
    [
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password must be at least 5 characters").isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ success: false, errors: errors.array() });
        }

        User.findOne({ email: req.body.email })
            .then((existingUser) => {
                if (!existingUser) {
                    return res.status(400).json({
                        success: false,
                        error: "Wrong email or password!",
                    });
                }

                bcrypt
                    .compare(req.body.password, existingUser.password)
                    .then((passwordCompare) => {
                        if (!passwordCompare) {
                            return res
                                .status(400)
                                .json({ error: "Wrong email or password!" });
                        }

                        const data = {
                            user: {
                                id: existingUser.id,
                            },
                        };
                        const authtoken = jwt.sign(data, JWT_SECRET);
                        res.json({
                            success: true,
                            authtoken: authtoken,
                            timeStamp: new Date(),
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).json({
                            success: false,
                            error: "An error occurred",
                        });
                    });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({
                    success: false,
                    error: "An error occurred",
                });
            });
    }
);

router.post("/getuser", fetchUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send({ success: true, user });
    } catch (error) {
        res.status(500).send({
            success: false,
            error: "Internal server error",
        });
    }
});

module.exports = router;
