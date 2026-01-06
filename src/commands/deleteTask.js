// import  path from 'node:path';
import  { getUserInput }    from '../utils/getUserInput.js';
// import  fs  from    'node:fs/promises';
import updateDb from '../utils/updateDb.js';
import getTasks from '../utils/getTasks.js';

export default async function deleteTask() {
    const   tasks = await getTasks();
    try {
        const   id = await getUserInput("Enter task ID to delete: ");
        let     updTasks = tasks.filter( (task) => task.id !== Number(id) );
        if (updTasks.length < tasks.length) {
            updTasks = updTasks.map( (task, idx) => ({ ...task, "id": idx + 1 }) );
            await updateDb(filePath, updTasks);
            console.log('Task deleted successfully');
        } else
            console.log('Task Not Found!');
    } catch (error) {
        console.error(`error: ${error}`);
    }
}