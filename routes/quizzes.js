const express = require("express");
const router = express.Router();
const async = require('async');
const Question = require('../models/question');
const Quiz = require('../models/quiz');

router.get("/generate", (req, res) => {
    console.log('HITTING THE GENERATE QUIZ ROUTE');

    // Create a quiz
    // newQuiz = new Quiz;

    // Aggregate the questions
    Question.aggregate([{ $sample: { size: 5 } }], (err, questions) => {
        if (err) { return console.log(); }
        res.json({ questions: questions })
    });

    // push each question into the newly generated quiz
    // push the question Id's only into quiz.questions
    // {questions: ['abcd','','','','']}

    // res.redirect('/quiz/:quizId/abcd')

})

// /quiz/quizId/result 



module.exports = router;