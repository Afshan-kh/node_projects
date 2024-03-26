import inquirer from "inquirer"

const answers : {

    sentence : string


} = await inquirer.prompt([
    {
        name : "sentence",
        type : "input",
        message : "Write your sentence for word counting. "
    }
])

const word = answers.sentence.trim().split(" ")
console.log(`Your sentence's word count is ${word.length}`);