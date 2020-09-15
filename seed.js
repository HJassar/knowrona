const mongoose = require("mongoose");

const Question = require("./models/question.js");

const questions = [
	{
		stem        : "Corona is",
		choices     : [
			{ text: "virus", isCorrect: true, counter: 2 },
			{ text: "animal", isCorrect: false, counter: 3 },
			{ text: "bacterium", isCorrect: false }
		],
		explanation :
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet ex nisl, at hendrerit neque ultrices quis. Maecenas nec ante pulvinar, vehicula neque eu, bibendum velit. Donec blandit augue vitae facilisis maximus. Phasellus commodo magna non arcu mollis mattis. Donec vel libero lobortis lorem vestibulum aliquet ut nec dolor. Nulla vel magna gravida arcu tincidunt condimentum. Vivamus sollicitudin mollis lacus eu egestas. Praesent placerat auctor dolor, vitae sollicitudin augue tincidunt vitae. Pellentesque ante erat, dictum non arcu ac, condimentum malesuada arcu."
	},
	{
		stem        : "Coronavirus is likely to be more dangerous for",
		choices     : [
			{ text: "teens", isCorrect: false, counter: 1 },
			{ text: "adults", isCorrect: false, counter: 1 },
			{ text: "people with weakened immune szstem", isCorrect: true, counter: 5 }
		],
		explanation :
			"Suspendisse aliquet ex nisl, at hendrerit neque ultrices quis. Maecenas nec ante pulvinar, vehicula neque eu, bibendum velit. Donec blandit augue vitae facilisis maximus. Phasellus commodo magna non arcu mollis mattis. Donec vel libero lobortis lorem vestibulum aliquet ut nec dolor. Nulla vel magna gravida arcu tincidunt condimentum. Vivamus sollicitudin mollis lacus eu egestas. Praesent placerat auctor dolor, vitae sollicitudin augue tincidunt vitae. Pellentesque ante erat, dictum non arcu ac, condimentum malesuada arcu."
	},
	{
		stem        :
			"Washing your hands for 20 seconds is one of the most important ways of avoiding infection. But what part of the process is it that destroys the virus?",
		choices     : [
			{ text: "water", isCorrect: false, counter: 20 },
			{ text: "soap", isCorrect: true, counter: 35 },
			{ text: "friction", isCorrect: false, counter: 15 }
		],
		explanation :
			"The main factor is the soap. The soap molecules dissolve the wall that surrounds and protects the virus. If you wash your hands with soap for a good 20 seconds the virus will literally fall apart on your skin and no longer be a danger. "
	},
	{
		stem        :
			"People are advised to social distance by staying two metres apart. But which kitchen appliance did the government use to help people understand how far two metres is?",
		choices     : [
			{ text: "cooker", isCorrect: false, counter: 10 },
			{ text: "fridge", isCorrect: true, counter: 3 },
			{ text: "microwave", isCorrect: false }
		],
		explanation :
			"The government put out advice saying you could measure two metres by imagining the width of three fridges between you and the next person. It wasn’t seen as particularly useful advice and was widely mocked on social media. Other two metre distance comparisons from the government were: a bed; two benches or four chairs."
	},
	{
		stem        :
			"People are encouraged to meet up outside wherever possible, but which of these do we know is a major factor in preventing the virus from spreading as easily outside?",
		choices     : [
			{ text: "The pollution", isCorrect: false, counter: 10 },
			{ text: "The breeze", isCorrect: true, counter: 4 },
			{ text: "Oxygen levels", isCorrect: false, counter: 6 }
		],
		explanation :
			"It’s the breeze. Scientists are still studying all the reasons why being with people outside is so much safer than being in an enclosed space, but even the slightest breeze helps disperse the virus, exposing you to much lower levels than you would meeting inside. Some studies have also found direct sunlight reduces the amount of time the virus will remain infectious, which is another benefit of being outside."
	},
	{
		stem        :
			"A high temperature and a continuous cough have been official coronavirus symptoms since the start of the pandemic. But which of these did the government add to the list of early symptoms that people should look for?",
		choices     : [
			{ text: "A sore throat", isCorrect: false, counter: 1 },
			{ text: "A rash on yoyr skin", isCorrect: false, counter: 6 },
			{ text: "Loosing your sense of smell or taste", isCorrect: false, counter: 15 }
		],
		explanation :
			"It’s losing your sense of smell or taste – or sometimes just a noticeable change in smell or taste. These are the three symptoms the government lists as ones which could require you to self-isolate: a high-temperature, a new persistent cough and the loss of smell or taste. Difficulty breathing, extreme tiredness, stomach pain and diarrhoea are among the other symptoms that have been associated with the virus, but these are usually present along with at least one of the main three symptoms."
	}
];

const seedDB = async () => {
	try {
		await Question.deleteMany({});
		console.log("Deleted questions");

		for (const question of questions) {
			await Question.create(question);
			console.log("Created a question");
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = seedDB;
