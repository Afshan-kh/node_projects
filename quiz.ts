import chalk from "chalk";
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let quizgame = await inquirer.prompt ({
    type : "input",
    name : "Yourname",
    message : "What is your name?",

});

console.log(quizgame);

const apiLink : string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple" ;

let fetchData = async (data:string ) => {
let fetchQuiz : any = await fetch (data);
let res = await fetchQuiz.json();
return res.results;
};

let data = await fetchData(apiLink);

let startQuiz = async () => {
let score : number = 0;

for (let i=1; i< 5; i++){

    let answers = [...data[i].incorrect_answers, data[i].correct_answer];

    let ans = await inquirer.prompt({
        type : "list",
        name : "quiz",
        message : data[i].question,
        choices : answers
    });
     if (ans == data[i]. correct_answer){
        ++score
     }

}

console.log(score);

};

startQuiz();

