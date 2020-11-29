const mongoose = require("mongoose");
const Question = require("../models/question.js");
const Quiz = require("../models/quiz");

const questions = [
	{
		stem: "COVID-19 is caused by a",
		choices: [
			{ text: "Virus", isCorrect: true },
			{ text: "Animal", isCorrect: false },
			{ text: "Bacterium", isCorrect: false }
		],
		explanation:
			"Coronavirus disease 2019 (COVID-19) is caused by a new coronavirus first identified in Wuhan, China, in December 2019. Because it is a new virus, scientists are learning more each day. Although most people who have COVID-19 have mild symptoms, COVID-19 can also cause severe illness and even death. Some groups, including older adults and people who have certain underlying medical conditions, are at increased risk of severe illness."
	},
	{
		stem: "Which of the following groups is at increased risk of severe COVID-19",
		choices: [
			{ text: "Children", isCorrect: false},
			{ text: "Athletics", isCorrect: false},
			{ text: "Smokers", isCorrect: true}
		],
		explanation:
			"While children have been less affected by COVID-19 compared to adults, children can be infected with the virus that causes COVID-19 and some children develop severe illness. Children with underlying medical conditions are at increased risk for severe illness compared to children without underlying medical conditions."
	},
	{
		stem:
			"Which of the following symptoms is NOT commonly associated with COVID-19",
		choices: [
			{ text: "Cough", isCorrect: false},
			{ text: "Diarrhea", isCorrect: false },
			{ text: "Headache", isCorrect: false},
			{ text: "New loss of taste or smell", isCorrect: false},
			{ text: "Nausea or vomiting", isCorrect: false},
			{ text: "High-grade fever", isCorrect: true}
		],
		explanation:
			"As with most viral illnesses, fevers during COVID-19 are low-grade fevers. High-grade fever during COVID-19 may point towards an additional infection besides COVID-19, e.g. bacterial pneumonia"
	},
	{
		stem:
			"During exercise as a preventive measure you should:",
		choices: [
			{ text: "Wear a mask", isCorrect: false},
			{ text: "Keep a safe distance from others", isCorrect: true },
			{ text: "Wear a mask and keep a safe distance", isCorrect: false }
		],
		explanation:
			"People should NOT wear masks when exercising, as masks may reduce the ability to breathe comfortably. Sweat can make the mask become wet more quickly which makes it difficult to breathe and promotes the growth of microorganisms. The important preventive measure during exercise is to maintain physical distance of at least one meter from others."
	},
	{
		stem:
			"Prolonged use of surgical masks causes:",
		choices: [
			{ text: "Increased CO2 levels", isCorrect: false },
			{ text: "Labored breathing", isCorrect: true },
			{ text: "Decreased O2 levels", isCorrect: false }
		],
		explanation:
			"According to WHO, prolonged use of surgical masks can cause uncomfortable breathing. However, it does not affect CO2 or O2 levels in your body."
	},
	{
		stem:
			"Drinking bleach or any other disinfectant will protect you against COVID-19:",
		choices: [
			{ text: "True", isCorrect: false },
			{ text: "False", isCorrect: true }
		],
		explanation:
			"If we have to explain this to you then we have a bigger problem than COVID..."
	},
];

const seedDB = () => {
	Quiz.deleteMany({}, ()=>{})
	.then(()=>{
		Question.deleteMany({},()=>{}).then;
	})
	.then(()=>{
		for (const question of questions) {
			Question.create(question, (err, question) => {
				console.log(question._id + " has been created");
			});
		}
	})
}

module.exports = seedDB;
