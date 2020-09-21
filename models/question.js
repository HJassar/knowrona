const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
	{
		stem: String,
		explanation: String,
		choices: [
			{
				text: String,
				isCorrect: Boolean,
				counter: { type: Number, default: 0 }
			}
		]
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
