const express = require("express");
const router = express.Router();
const Question = require('../models/question');
const Quiz = require('../models/quiz');

// /admin


// Trash Quiz
router.get('/trash-quiz', (req, res) => {
    const quizId = req.query.quizId;
    Quiz.findByIdAndUpdate(quizId, { inTrash: true }, (err, trashedQuiz) => {
        if (err) { return console.log(err); }
        console.log(trashedQuiz);
        res.send(trashedQuiz.id + " has been trashed!")
    })
})

module.exports = router;