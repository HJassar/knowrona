const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
	{
		questions: [
			{
				questionId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Question"
				},
				points: { type: Number, default: 0 },
				selectedChoice: { type: String, default: null }
			}
		],
		result: { type: Number, default: -1 }
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);

// for future reference, result system.
// quiz.questions.lenghth = 5
// +1 +1 0 0 +1  3/5... 
// 2 /2 iscorrect  1  1  1 1   6/5
//  