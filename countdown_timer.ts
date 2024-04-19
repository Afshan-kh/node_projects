import { differenceInSeconds } from "date-fns";
import { is } from "date-fns/locale";
import inquirer from "inquirer";


const res = await inquirer.prompt({

    type : "number",
    name : "userInput",
    message : "Give your input?",
    

});

let input = res.userInput;

function startTimer(val:number){
const iniTime = new Date().setSeconds(new Date().getSeconds()+ val);
const date = new Date(iniTime);
   setInterval((()=>{
    const timer = new Date()
    const intervalTimer = differenceInSeconds(date,timer )
    if (intervalTimer < 0){
        return " Timer has expired";
        process.exit();
    }

    const min = Math.floor((intervalTimer%(3600*24))/3600)
    const sec = Math.floor(intervalTimer% 60);
    console.log(`${min.toString().padStart(2 , "0")} : ${sec.toString().padStart(2 , "0")}`)

   }),1000)


};

startTimer(input);






