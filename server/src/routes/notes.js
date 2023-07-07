const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Note = require("../models/Note");

router.get("/getall", fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});

router.post(
    "/add",
    fetchUser,
    [
        body("title", "Title must be atleast 3 characters").isLength({
            min: 3,
        }),
        body(
            "description",
            "Description must be atleast 5 characters"
        ).isLength({ min: 5 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { title, description, tag, color } = req.body;

            const note = new Note({
                title,
                description,
                tag,
                color,
                updatedDate: new Date(),
                user: req.user.id,
            });
            const savedNote = await note.save();
            res.json(savedNote);
        } catch (error) {
            res.status(500).send("Internal server error");
        }
    }
);

router.put("/update/:id", fetchUser, async (req, res) => {
    try {
        console.log(req.body);
        const { title, description, tag, color } = req.body;
        const newNote = {};
        if (title) newNote.title = title;
        if (description) newNote.description = description;
        if (tag) newNote.tag = tag;
        if (color) newNote.color = color;
        newNote.updatedDate = new Date();
        let note = await Note.findById(req.params.id);
        if (!note) res.status(404).send("Not Found");
        if (note.user.toString() !== req.user.id) {
            res.status(401).send("Permission denied");
        }
        note = await Note.findByIdAndUpdate(
            req.params.id,
            { $set: newNote },
            { new: true }
        );
        res.json(note);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});

router.delete("/delete/:id", fetchUser, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) res.status(404).send("Not Found");
        if (note.user.toString() !== req.user.id) {
            res.status(401).send("Permission denied");
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ Success: "Note has been deleted", note: note });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});

module.exports = router;
