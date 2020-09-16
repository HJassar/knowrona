const express = require("express")
    , router = express.Router()
    , Question = require('../models/question')
    , Quiz = require('../models/quiz');

router.get("/generate", (req, res) => {
    Question.aggregate([{ $sample: { size: 5 } }], (err, questions) => {
        if (err) { return console.log(); }
        
        res.send('generated quiz')
    });
})

module.exports = router;