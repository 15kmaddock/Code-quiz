var score = 0;
var timer;
var timerCounter = 60;

var intro = document.getElementById("intro");
var start = document.getElementById("startBtn");
var quiz = document.getElementById("quiz");
var questionBox = document.getElementById("questionBox");
var quizQuestion = document.getElementById("question");
var correctA = document.getElementById("correctA");
var correctB = document.getElementById("correctB");
var correctC = document.getElementById("correctC");
var countdown = document.getElementById("countdown");
var criticismEl = document.getElementById("criticism");
var submitBtn = document.getElementById("submit");



var questions = [
    {
        question : "What is CSS",
        choiceA: "a data base",
        choiceB: "HTML",
        choiceC: "Casecade Styling Sheet",
        correctAnswer: "correctC",
    },
    
    {
        question : "What is VSCODE",
        choiceA: "Vital Studio Code",
        choiceB: "Virtual Studio Code",
        choiceC: "Visual Studio Code",
        correctAnswer: "correctC", 
    },

    {
        question : "What is GitHub",
        choiceA: "Code Hosting Platform",
        choiceB: "Cat buying agency",
        choiceC: "where you get things",
        correctAnswer: "correctA",   
    },

    {
        question : "What is HTML",
        choiceA: "Hyper Text Makeup Language",
        choiceB: "Hyper Text Markup Language",
        choiceC: "Hyper Text Monitoring Language",
        correctAnswer: "corrrectB",
    },

    
];