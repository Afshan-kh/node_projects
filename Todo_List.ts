import inquirer from "inquirer";

type ansType = {
    ToDoList : string,
    AddMore : boolean,
}

let toDo : string[]= [];
let loop = true;

while(loop){
    const answers : ansType = await inquirer.prompt([
{
    type : "input",
    name: "ToDoList",
    message : "Please write your Todo List."
}, 
{
    type : "confirm",
    name: "AddMore",
    message : "Do you want to add more?",
    default : false,
}

    ])

    const { ToDoList, AddMore} = answers; 
    loop = AddMore;

    if (ToDoList){
toDo.push(ToDoList)
    }
else{
    console.log("Invalid input.")
}
}
if (toDo.length > 0){
    console.log("Your ToDo List is: ")

toDo.forEach (ToDoList =>{
    console.log(ToDoList);
});
}
else{
    console.log("No list Found.");
}