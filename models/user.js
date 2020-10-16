const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		roles: { type: String, default: player },
		userName: String,
		displayName: String,
		email: String,
		quizzes: [
			{
				quizId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Quiz"
				}
			}
		],
		questionsAnswered: [
			{
				questionId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Question"
				}

			}
		],
		avatar: { data: Buffer, contentType: String }
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);