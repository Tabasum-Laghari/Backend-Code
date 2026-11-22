
const express = require("express");
const router = express.Router();

const path = require("path");
const multer = require("multer");
const User = require("./user");

// --------------------
// Multer Image Upload
// --------------------

const storage = multer.diskStorage({
    destination: "./uploads/",

    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        cb(null, Date.now() + extension);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 // 1 MB
    }
});

router.post("/upload", upload.single("image"), (req, res) => {
    res.json({
        msg: "Image uploaded successfully",
        file: req.file
    });
});

// --------------------
// Add User API
// --------------------

router.post("/adduser", async (req, res) => {
    try {
        const newUser = new User({
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            gender: req.body.gender
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// --------------------
// Read Users API
// --------------------

router.get("/viewuser", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// --------------------
// Update User API
// --------------------

router.put("/updateuser/:userid", async (req, res) => {
    const uid = req.params.userid;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            uid,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// --------------------
// Delete User API
// --------------------

router.delete("/deleteuser/:userid", async (req, res) => {
    const uid = req.params.userid;

    try {
        const deletedUser = await User.findByIdAndDelete(uid);

        if (!deletedUser) {
            return res.status(404).json({
                msg: "User not found"
            });
        }

        res.status(200).json({
            msg: "User deleted successfully",
            status: "1"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;
