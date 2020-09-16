const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');
const Question = require('../models/question');


router.post('/',(req,res)=>{
    let quizData = someVar; //var received from front-end
    let id;
    let selectedChoice;
    let isCorrect;
    let points;
    let newQuestion;
    let questions = [];
    let result = 0;
    
    quizData.forEach(element => {
        id = req.body.element.id;
        selectedChoice = req.body.element.selectedChoice;
        isCorrect = req.body.element.isCorrect;
        if(isCorrect === true ) {
            points = 1;
        } else {
            points = 0;
        }
        newQuestion = {id: id, selectedChoice: selectedChoice, points: points};
        questions.push(newQuestion);
        result += points;
    });
    Quiz.create(newData, (err, cgs) => {
        if (err) {
            console.log("some error");
        } else {
            res.json({ result: result });
        }
    });
})


router.get('/quiz/:quizId/:questionId/:choiceId',(req,res)=>{
    Question.find(questionId,(err,question)=>{
        // question.choices.find(...)
        // counter+1, quiz score, AnswerCorrect of one question is sent back to front, explanation
    })
})

// Getting the question
// /quiz/:quizId/:questionId
// router.get('/quiz/:quizId/:questionId',(req,res)=>{
//     const questionId = req.params.questionId;
//     Question.findById(questionId,(err,question)=>{
//         // choicesOnly

//         const questionOnly = {
//             stem: question.stem,
//             choices: [...choices]
//         }
//     })
// })






module.exports = router;
