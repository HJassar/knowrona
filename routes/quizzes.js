const   express     =   require("express")
        ,router     =   express.Router()
        ,Question   =   require('../models/question')
        ,Quiz       =   require('../models/quiz');

router.get("/generate", (req,res) => {
    console.log('HITTING THE GENERATE QUIZ ROUTE');
    Question.aggregate([{ $sample: { size: 5 } }], (err, questions) => {
        if(err) {
            console.log("some error");
        } else {
            
            res.json({questions: questions});
        }
    });
})

module.exports  =   router;