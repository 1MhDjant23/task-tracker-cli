import  { getUserInput } from './utils/getUserInput.js'
import addTask  from './commands/addTask.js';

async function showMenu() {
    console.log('1) add "task description".');
    console.log('2) list.');
    console.log('3) delete task:id.');
    console.log('4) mark-in-progress task:id.');
    console.log('5) mark-done task:id.');
    console.log('6) update task:id "new description".');
    const answer = await getUserInput("Enter one option: ");
    return answer;
}


const   handleInput = (option) => {
    if(option === "1") {
        addTask();
    }
    else if(option === "2") {
        listTasks();
    }
    else if(option === "3") {
        deleteTask();
    }
    else if (option === "4") {
        markInProgress();
    }
    else if (option === "5") {
        markDone();
    }
    else if (option === "6") {
        updateTask();
    }
    else {
        console.log("choose a valid option!");
    }
}

function main() {
    console.log("Welcome to Task Manager!🙌🏻");
    showMenu().then((option) => {
        console.log("option selected:", option);
        handleInput(option);
    })
    .catch((err) => {
        console.error("Error:", err);
    });

}

main();
// const   [ , , cmd, ...rest] = process.argv;

// console.log(`argv: ${cmd} - ${rest}`);

// if (cmd === 'add' || cmd) {
    
// }
