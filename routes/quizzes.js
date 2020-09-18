const express = require("express");
const router = express.Router();
// const async = require('async');
const Question = require('../models/question');
const Quiz = require('../models/quiz');

// Hamza's Approach
router.get('/generate', (req, res) => {

    const currentSession = {
        quizId: null,
        questions: []
    }
    
    Quiz.create({}, (err, generatedQuiz) => {
        if (err) return console.log(err)
        currentSession.quizId = generatedQuiz._id;
        const pushing = async (cb) => {
            await Question.aggregate([{ $sample: { size: 5 } }], (err, questions) => {
                if (err) return console.log(err)
                questions.forEach(question => {
                    const compactQuestion = {
                        id: question._id,
                        stem: question.stem,
                        choices: question.choices.map(choice=>{
                            return choice.text;
                        })
                    }
                    generatedQuiz.questions.push(question._id);
                    currentSession.questions.push(compactQuestion)
                })
            })
            res.send(currentSession)
        }
        pushing();
    })
})

// router.get("/generate", (req, res) => {
//     console.log('Generate Quiz route accessed');
//     Question.aggregate([{ $sample: { size: 5 } }], (err, foundQuestions) => {
//         if (err) {
//             console.log(err);
//         } else {
//             generateQuiz(req, res, foundQuestions);
//         }
//     });
// });

// const generateQuiz = ((req, res, foundQuestions) => {
//     let questionId;
//     let stem;
//     let choiceId;
//     let choiceText;
//     let choices;
//     let questionsObj;
//     let questions = [];
//     let quizQuestionId = [];

//     foundQuestions.forEach(Questionelement => {
//         let quizChoices = [];

//         questionId = Questionelement._id;
//         stem = Questionelement.stem;

//         Questionelement.choices.forEach(choiceElement => {
//             choiceId = choiceElement._id;
//             choiceText = choiceElement.text;
//             choices = { id: choiceId, text: choiceText };
//             quizChoices.push(choices);
//         });

//         questionsObj = { id: questionId, stem: stem, choices: quizChoices };
//         quizQuestionId.push({ id: questionId });
//         questions.push(questionsObj);
//     });
//     updateQuizSchema(req, res, quizQuestionId, questions);
// });

// const updateQuizSchema = ((req, res, quizQuestionId, questions) => {
//     let quizId;
//     let quiz;

//     Quiz.create({ questions: quizQuestionId }, (err, value) => {
//         if (err) {
//             console.log(err);
//         } else {
//             quizId = value._id;
//             quiz = { quizId: quizId, questions: questions };
//             res.json(quiz);
//         }
//     });
// });

module.exports = router;