const express = require("express");
const router = express.Router();
const Question = require('../models/question');
const Quiz = require('../models/quiz');

// /quizzes

// Read
router.get('/:quizId', (req, res) => {
    const quizId = req.params.quizId;
    Quiz.findById(quizId,(err,quiz)=>{
        // only if admin should we send the whole quiz, otherwise we should send cratedAt, result... etc.
        res.send(quiz);
    })
})

// Index
// Not all quizzes should be sent, right now they are, will be modified so that admin can view all, players can see their own quizzes only
router.get('/', (req, res) => {
    const currentPage = req.query.currentPage || 1;
    const quizzesPerPage = req.query.quizzesPerPage || 10;
    Quiz.find({}, (err, allQuizzes) => {
        if (err) { return console.log(err) }
        const quizCount = allQuizzes.length;
        const pageCount = quizCount / quizzesPerPage;

        const firstQuiz = (currentPage - 1) * quizzesPerPage;
        const lastQuiz = firstQuiz + quizzesPerPage;
        const currentBatch = allQuizzes.slice(firstQuiz, lastQuiz)

        res.send({
            quizzes: currentBatch,
            pageCount: pageCount
        });
    })
})


// Delete


module.exports = router;