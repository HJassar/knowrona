const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema(
	{
		questions: [
			{
				id: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Question"
				},
				points: Number,
				selectedChoice: String
			}
		],
		result: Number
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
