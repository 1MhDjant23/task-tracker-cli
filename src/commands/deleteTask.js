import  { getUserInput } from '../utils/getUserInput.js';
import  updateDb         from '../utils/updateDb.js';
import  getTasks         from '../utils/getTasks.js';
import chalk             from 'chalk';

export default async function deleteTask() {
    const   tasks = await getTasks();
    if (!Array.isArray(tasks) || tasks.length === 0) {
        console.log(chalk.red.bold('⚠️ No tasks to delete.'));
        return;
    }
    try {
        const   id = await getUserInput(chalk.yellow.bold('🗑️ Enter Task ID to delete: '));
        const   idx = tasks.findIndex(task => task.id === Number(id));

        if (idx === -1) {
            console.log(chalk.red.bold('❌ Task not found!'));
            return;
        }
        const   deletedTask = tasks.splice(idx, 1)[0];
        tasks.map( (task, idx) => ({ ...task, "id": idx + 1 }) );

        await   updateDb(filePath, tasks);
        console.log(chalk.green.bold(`✅ Task "${deletedTask.description}" deleted successfully!`));
    } catch (error) {
        console.error(`error: ${error}`);
    }
}