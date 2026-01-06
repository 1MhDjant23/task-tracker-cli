import getTasks from '../utils/getTasks.js';
import chalk from 'chalk';

export default async  function listTasks() {
    const   tasks = await getTasks();

    if (!Array.isArray(tasks) || tasks.length === 0) {
        console.log(chalk.red.bold('⚠️ No tasks found.'));
        return;
    }
    console.log(chalk.bold.blue('\n📋 Your Tasks:'));
    tasks.forEach(task => {
        let statusColor;
        switch (task.status) {
            case 'todo':
                statusColor = chalk.yellow;
                break;
            case 'in-progress':
                statusColor = chalk.cyan;
                break;
            case 'done':
                statusColor = chalk.green;
                break;
            default:
                statusColor = chalk.white;
                break;
        }
        console.log(
            chalk.bold(`#${task.id}`) +
            ' | ' +
            chalk.white(task.description) +
            ' | ' +
            statusColor.bold(task.status) +
            ' | ' +
            chalk.gray(`Created: ${task.createdAt ? new Date(task.createdAt).toLocaleString() : 'N/A'}`)
        );
    });
}