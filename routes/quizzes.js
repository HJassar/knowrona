const express = require("express");
const router = express.Router();
const Question = require('../models/question');
const Quiz = require('../models/quiz');

router.get("/generate", (req, res) => {
    console.log('HITTING THE GENERATE QUIZ ROUTE');
    Question.aggregate([{ $sample: { size: 5 } }], (err, questions) => {
        if (err) { return console.log(); }
        res.json({ questions: questions })
    });
})

module.exports = router;