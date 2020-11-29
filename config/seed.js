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
			"People are encouraged to meet up outside wherever possible, but which of these do we know is a major factor in preventing the virus from spreading as easily outside?",
		choices: [
			{ text: "The pollution", isCorrect: false, counter: 10 },
			{ text: "The breeze", isCorrect: true, counter: 4 },
			{ text: "Oxygen levels", isCorrect: false, counter: 6 }
		],
		explanation:
			"It’s the breeze. Scientists are still studying all the reasons why being with people outside is so much safer than being in an enclosed space, but even the slightest breeze helps disperse the virus, exposing you to much lower levels than you would meeting inside. Some studies have also found direct sunlight reduces the amount of time the virus will remain infectious, which is another benefit of being outside."
	},
	{
		stem:
			"A high temperature and a continuous cough have been official coronavirus symptoms since the start of the pandemic. But which of these did the government add to the list of early symptoms that people should look for?",
		choices: [
			{ text: "A sore throat", isCorrect: false, counter: 1 },
			{ text: "A rash on yoyr skin", isCorrect: false, counter: 6 },
			{ text: "Loosing your sense of smell or taste", isCorrect: true, counter: 15 }
		],
		explanation:
			"It’s losing your sense of smell or taste – or sometimes just a noticeable change in smell or taste. These are the three symptoms the government lists as ones which could require you to self-isolate: a high-temperature, a new persistent cough and the loss of smell or taste. Difficulty breathing, extreme tiredness, stomach pain and diarrhoea are among the other symptoms that have been associated with the virus, but these are usually present along with at least one of the main three symptoms."
	}
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
