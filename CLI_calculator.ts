

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const stop=()=>{
    return new Promise((con)=>{
setTimeout (con,2000);
    }
  )
}

async function calculation() {
     let callAnimation = chalkAnimation.rainbow('Lets start claculation.');
await stop();

    callAnimation.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `)
};

//calculation();

async function callquestions(){

    await inquirer
    .prompt([
        /* Pass your questions in here */


{type: "list",
name : "operator",
message: "Choose, which operation you want? \n",
choices : ["Addition", "Substraction" , "Multiplication" , "Division"],
    } ,

    
   {type: 'number',
    name: "number1",
    message: "Choose number 1 =",

   },




   { type: 'number',
   name: "number2",
   message: "Choose number 2 =",


    }



      ])
      .then((answers) => {
        // Use user feedback for... whatever!!
        //console.log(answers);

        if(answers.operator == "Addition"){
          console.log( `${answers.number1} + ${answers.number2} = ${answers.number1 + answers.number2}`)
        }
        else if(answers.operator == "Substraction"){
          console.log( `${answers.number1} - ${answers.number2} = ${answers.number1 - answers.number2}`)
        }

        else if(answers.operator == "Multiplication"){
          console.log( `${answers.number1} * ${answers.number2} = ${answers.number1 * answers.number2}`)
        }

        else if(answers.operator == "Division"){
          console.log( `${answers.number1} / ${answers.number2} = ${answers.number1 / answers.number2}`)
        }
      })
      
      };
//callquestions();

async function toBeContinue(){
  do
  {
   await callquestions();
  var again = await inquirer
    .prompt({
      type : "input",
      name : "continue",
      message :"Do you want to continue ?  Y  or  N"
      
    }
      
    )


}while(
  again.continue == 'y' ||  again.continue == 'Y' ||  again.continue == 'yes' )


};

toBeContinue();