const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: String,
		lastName: String,
		roles: { type: String, default: 'player' },
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
		avatar: String,
		password: String
	},
	{ timestamps: true }
);

userSchema.plugin(passportLocalMongoose, { usernameQueryFields: ["email"] });

module.exports = mongoose.model('User', userSchema);