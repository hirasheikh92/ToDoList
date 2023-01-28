import inquirer from "inquirer";


let toDoList:string[]= [];
async function RepeatFLow(){
    const answer =  await inquirer.prompt([{
        name:"repeat",
        type:"list",
        choices:["Yes","No"],
        message:"Do you want another Operation"
    }])
    return (answer.repeat === "Yes")?true :false;
}

async function ToDoList(){
    let startingAgain = true;
    do {
        const answer:{option:string} =  await inquirer.prompt([{
            name:"option",
            type:"list",
            choices:["Add Item","Display","Remove Items"],
            message:"What you want to do? "
        }]);
    
        if(answer.option === "Add Item"){
           const item = await inquirer.prompt([{
                name:"newItem",
                type:"input",
                message:"Enter new Item"
           }]) ;
           toDoList.push(item);
           startingAgain = await RepeatFLow();

        }else if(answer.option === "Display"){
            toDoList.forEach(element => console.log(element));
            startingAgain = await RepeatFLow();
        }
        else if (answer.option === "Remove Items"){
             const removeItem:{remove:string} = await inquirer.prompt([{
                name:"remove",
                type:"input",
                message:"which item you want to remove? "
             }]);
    
             let index = toDoList.indexOf(removeItem.remove);
             console.log(index);
             startingAgain = await RepeatFLow();
             
        }
    } while (startingAgain !== false);
    
 }

ToDoList();