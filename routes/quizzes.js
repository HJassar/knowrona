const express = require("express");
const router = express.Router();
const Question = require('../models/question');
const Quiz = require('../models/quiz');

// This is /quizzes

// Index
router.get('/', (req, res) => {
    const currentPage = req.query.currentPage || 1;
    const quizzesPerPage = req.query.quizzesPerPage || 10;
    Quiz.find({}, (err, allQuizzes) => {
        if (err) { return console.log(err) }
        const quizCount = allQuizzes.length;
        const pageCount = quizCount / quizzesPerPage;

        const firstQuiz = (currentPage - 1) * quizzesPerPage;
        const lastQuiz = firstQuiz + quizzesPerPage;
        const currentBatch = allQuizzes.slice(firstQuiz,lastQuiz)

        res.send({
            quizzes: currentBatch,
            pageCount: pageCount
        });
    })
})

// Read

// Delete

module.exports = router;