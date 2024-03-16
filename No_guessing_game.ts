import inquirer from "inquirer";

type ansType = {
    guess : number
}

let anyNumber = Math.floor(Math.random() * 10);



const answers : ansType = await inquirer
  .prompt([
{
    type : "number" ,
    name : "guess",
    message : "Guess a number?",


}
  ])

const {guess} = answers ;

if ( guess === anyNumber){
console.log ("Congratulatons, you have won the Game.");
}

else {
    console.log("Sorry, you have guess it wrong");
};