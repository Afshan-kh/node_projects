import inquirer from "inquirer";
import chalk from "chalk";

class Player {

name : string
fuel : number = 100
constructor(name : string){
    this.name = name
}

}

class Opponent {

    name : string
    fuel : number = 100
    constructor(name : string){
        this.name = name
    }
 }

 const answers = await inquirer.prompt([
    {
 
    type : "input",
    name : "player",
    message : " Enter your name : ",
    },

    {
        type : "list",
        name : "opponent",
        message : " Choose your opponent : ",
        choices : ["Zombie" , "Villian" , "BlackMagic"],
    }
    ]);
    const { player , Opponent} = answers;

    let p1 = new Player (player.name)
    let o1 = new  Opponent (Opponent)
    
    if (Opponent.select == "Zombie"){
console.log (`${chalk.bold.green(p1.name)} V/S ${chalk.bold.red(o1.name)}`)
    }