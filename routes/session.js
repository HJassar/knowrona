const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');
const Question = require('../models/question');

// Router is /session

// 1. Generate a quiz for session
router.get('/generate', (req, res) => {
    const newQuiz = {
        quizId: null,
        questions: []
    }

    Quiz.create({}, (err, generatedQuiz) => {
        if (err) return console.log(err)
        newQuiz.quizId = generatedQuiz._id;
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
                    newQuiz.questions.push(compactQuestion);
                    generatedQuiz.questions.push(question._id);
                });
            });
            generatedQuiz.save();
            res.send(newQuiz);
        }
        pushingQuestionsToSession();
    });
});


// 2. Submit choice
router.get('/:quizId/:questionId/:choiceId/:questionIndex', (req, res) => {
    const quizId = req.params.quizId;
    const questionId = req.params.questionId;
    const choiceId = req.params.choiceId;
    const qi = req.params.questionIndex;

    // Compare answer to choices
    Quiz.findById(quizId, (err, currentQuiz) => {
        Question.findById(questionId, (err, question) => {
            if (err) return console.log(err);

            // Send correct answer to the quiz taker
            const answer = {
                choices: question.choices.map(c => {
                    return { choiceId: c._id, isCorrect: c.isCorrect }
                }),
                explanation: question.explanation
            }
            res.send(answer);

            // Increment counter of the answered question
            question.choices.map(c => {
                if (choiceId == c._id) {
                    c.counter += 1;
                }
            });
            question.save();

            //Update selected choice for the Quiz question
            currentQuiz.questions[qi].selectedChoice = choiceId;

            //Update points for the selected answer
            question.choices.map(c => {
                if (choiceId == c._id) {
                    if (c.isCorrect === true) {
                        currentQuiz.questions[qi].points += 1;
                    }
                }
            });
            currentQuiz.save();
        });
    });
});


// 3. Compute quiz result and send back
router.get('/result/:quizId', (req, res) => {
    const quizId = req.params.quizId;
    Quiz.findById(quizId, (err, currentQuiz) => {
        let result = 0;
        currentQuiz.questions.map(q => {
            result += q.points;
            return result;
        });
        res.send({ result: result });
    })
})


module.exports = router;