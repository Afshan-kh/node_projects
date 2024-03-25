import inquirer from "inquirer";

let conversion = {
    PKR : {
        "USD" : 0.0036 ,
        "GBP" : 0.0029,
        "PKR" : 1 ,
    },
    USD : {
        "USD" : 1,
        "GBP" : 0.79,
        "PKR" : 278.25,
    },
    GBP : {
        "USD" : 1.26 ,
        "GBP" : 1,
        "PKR" : 350.35 ,
    }
}

const answers :{
    from : "PKR" | "USD" | "GBP",
    to : "PKR" | "USD" | "GBP",
    amount : number,

}= await inquirer.prompt([

    {
        type : "list",
        name : "from",
        choices : ["PKR" , "USD", "GBP"],
        message : "Enter your currency",

    },
    
    {
        type : "list",
        name : "to",
        choices : ["PKR" , "USD", "GBP"],
        message : "Enter your conversion currency",

    },

    
    {
        type : "number",
        name : "amount",
        message : "Your amount?",

    }
]);

const {from , to , amount} = answers;

if (to && from && amount){
let result = conversion[to][from] * amount;
console.log (`Your conversion  amount from ${from} to ${to} is ${result}`)
}
else{ 
    console.log("Sorry, invalid input");
}