const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');
const Question = require('../models/question');

// Router is /session


// Generate a quiz for session
router.get('/generate', (req, res) => {

    const currentSession = {
        quizId: null,
        questions: []
    }

    Quiz.create({}, (err, generatedQuiz) => {
        if (err) return console.log(err)
        currentSession.quizId = generatedQuiz._id;
        const pushingQuestionsToSession = async () => {
            await Question.aggregate([{ $sample: { size: 5 } }], async (err, questions) => {
                if (err) return console.log(err)
                questions.forEach(question => {
                    const compactQuestion = {
                        id: question._id,
                        stem: question.stem,
                        choices: question.choices.map(choice => {
                            return { choiceText: choice.text, choiceId: choice._id }
                        })
                    }
                    currentSession.questions.push(compactQuestion)
                    generatedQuiz.questions.push(question._id);
                })
            })
            generatedQuiz.save();
            // console.log(currentSession)
            res.send(currentSession)
        }
        pushingQuestionsToSession();
    })
})


// Submit choice
router.get('/:quizId/:questionId/:choiceId', (req, res) => {

    const quizId = req.params.quizId;
    const questionId = req.params.questionId;
    const choiceId = req.params.choiceId;

    // Compare answer to choices
    Quiz.findById(quizId, (err, currentQuiz) => {
        Question.findById(questionId, (err, question) => {
            if (err) return console.log(err);

            // What do I need to send to the test taker?
            const answer = {
                choices: question.choices.map(c => {
                    return { choiceId: c._id, isCorrect: c.isCorrect }
                }),
                explanation: question.explanation
            }
            res.send(answer)

            // Manipulate the answered question
            question.choices.map((c, i) => {
                if (choiceId == c._id) {
                    c.counter = c.counter + 1;
                }
            })
            question.save()

            // Manipulate the quiz results
            // const points = currentQuiz.questions[currentIndex].points;
            // currentQuiz.questions.map and compare with ids
            // points += 1;


        })
    })
})

module.exports = router;