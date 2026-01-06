import getTasks from "../utils/getTasks.js";
import { getUserInput } from "../utils/getUserInput.js";
import updateDb from "../utils/updateDb.js";
import path from 'node:path';
import chalk from "chalk";

export default async function   updateTask() {
    let     tasks = await getTasks();
    const   filePath = path.resolve(process.cwd(), 'src', 'DB', 'tasks.json');
    const   now = new Date();

    if (!Array.isArray(tasks) || tasks.length === 0) {
        console.log(chalk.red.bold('⚠️ No tasks to update.'));
        return ;
    }

    const   idx = await getUserInput(chalk.yellow.bold('✏️ Enter Task ID to update: '));
    const   id = tasks.findIndex(task => task.id === Number(idx));

    if (id === -1) {
        console.log(chalk.red.bold('❌ Task not found!'));
        return;
    }
    const   newDesc = await getUserInput(chalk.cyan.bold('Enter new task description: '));
    tasks[id].description = newDesc;
    tasks[id].updateAt = now.toISOString();

    await updateDb(filePath, tasks);
    console.log(
        chalk.green.bold(`✅ Task #${idx} updated successfully! New description: "${newDesc}"`)
    );
}