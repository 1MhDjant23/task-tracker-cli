import  { getUserInput } from './utils/getUserInput.js'
import  addTask          from './commands/addTask.js';
import  listTasks        from './commands/listTasks.js';
import  deleteTask       from './commands/deleteTask.js';
import  updateState      from './commands/updateStatus.js';
import  updateTask       from './commands/updateTask.js';
import  chalk            from 'chalk'; /* jus for colored and styled console */

async function showMenu() {
    console.log(chalk.bold.blue('\n=== Task Tracker Menu ==='));
    console.log(chalk.green('0) Exit Program'));
    console.log(chalk.green('1) Add New Task'));
    console.log(chalk.green('2) List All Tasks'));
    console.log(chalk.green('3) Delete Task'));
    console.log(chalk.green('4) Mark-Task-In-Progress'));
    console.log(chalk.green('5) Mark-Task-Done'));
    console.log(chalk.green('6) Update Task'));
    const answer = await getUserInput(chalk.yellow.bold("Enter One Option: "));

    return answer;
}

const   handleInput = async (option) => {
    let nextOption;
    if (option === "0") {
        console.log(chalk.magenta.bold('👋 Exiting...'));
        process.exit(0);
    }
    else if(option === "1") {
        await addTask();
        nextOption = await showMenu()
        await handleInput(nextOption);
    }
    else if(option === "2") {
        await listTasks();
        nextOption = await showMenu()
        await handleInput(nextOption);
    }
    else if(option === "3") {
        await deleteTask();
        nextOption = await showMenu()
        await handleInput(nextOption);
    }
    else if (option === "4") {
        await updateState("in-progress");
        nextOption = await showMenu()
        await handleInput(nextOption);
    }
    else if (option === "5") {
        await updateState("done");
        nextOption = await showMenu()
        await handleInput(nextOption);
    }
    else if (option === "6") {
        await updateTask();
        nextOption = await showMenu()
        await handleInput(nextOption);
    }
    else {
        console.log(chalk.red.bold("❌ Choose a valid option!"));
        nextOption = await showMenu();
        await handleInput(nextOption);
    }
}

async function main() {
    try {
        console.log(chalk.green.bold("Welcome to Task Manager! 🙌🏻"));
        let option;
        do {
            option = await showMenu();
            await handleInput(option);
        } while (option !== "0");
    } catch (err) {
        if (err.code === 'ABORT_ERR' || err.name === 'AbortError') {
            console.log('\n' + chalk.magenta.bold('👋 Exiting... (Ctrl+C)'));
            process.exit(0);
        } else {
            console.error(chalk.red('Unexpected error:'), err);
            process.exit(1);
        }
    }
}

/**
 * The main start of program
*/
main(); 