import inquirer from "inquirer";

interface ansType {
    UserID : string,
    UserPIN: number,
    AccountType : string,
    transanctionDetails: string,
    Amount : number,

}

const answers : ansType = await inquirer.prompt([
    {
        type : "input" ,
        name : "UserID" ,
        message : "Kindly, give userID.",
    },

    {
        type : "number" ,
        name : "UserPIN" ,
        message : "Kindly, give userPIN.",
    },
    {
        type : "list" ,
        name : "AccountType" ,
        choices : ["Current account" , " Saving account"],
        message : "Choose account type?",
    },

    {
        type : "list" ,
        name : "transanctionDetails" ,
        choices : ["Account transfer" , " Cash withdrawl"],
        message : "Choose your transanction?",
        when(answers){
            return answers.AccountType
        },
    },
{
        type : "list" ,
        name : "Amount" ,
        choices : [1000, 2000, 5000, 10000],
        message : "Select amount?",
        when(answers){
            return answers.transanctionDetails == "Cash withdrawl"
        },
    },

    {
        type : "number" ,
        name : "Amount" ,
        message : "Enter your amount?",
        when(answers){
            return answers.transanctionDetails == "Account transfer"
        },
    },

])

if ( answers.UserID && answers.UserPIN){

const balance = Math.floor(Math.random()*10000);
console.log(balance)
const givenamount = answers.Amount;

if ( balance > givenamount) {
   const remaining =  balance - givenamount;
   console.log(remaining)
}
else {
    console.log ( "Sorry, your balance is insuffcient.")
}

}