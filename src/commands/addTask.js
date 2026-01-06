import  { getUserInput }    from '../utils/getUserInput.js';
import  updateDb            from '../utils/updateDb.js';
import  getTasks            from '../utils/getTasks.js';
import  path                from 'node:path';
import chalk                from 'chalk';

export default async function    addTask() {
    const   tasks = await getTasks();
    const   filePath = path.resolve(process.cwd(), 'src', 'DB', 'tasks.json');

    try
    {
        const desc = await getUserInput(chalk.yellow.bold("Enter Task Description: "));
        if (!desc || desc.trim().length === 0) {
            console.log(chalk.red.bold("❌ Task description cannot be empty!"));
            return;
        }
        let isAdded = false;
        tasks.forEach(element => {
            if (element.description === desc)
                isAdded = true;
        });
        if (!isAdded) { /*  prevent duplicat tasks  */ 
            tasks.push(newTaskObj(tasks.length + 1, desc, "todo"));
            await updateDb(filePath, tasks)
            .finally(() => console.log(chalk.green.bold('✅ New task added to database!')));
        } else
            console.log(chalk.red.bold('⚠️ Task already exists!'));
    } catch (err) {
        console.log(chalk.red.bold(`❌ : ${err}`));
    }
}

function    newTaskObj(id, desc, status) {
    const   now = new Date();
    return {
        "id": id,
        "description": desc,
        "status": status,
        "createdAt": now.toISOString(),
        "updateAt": now.toISOString()
    }
}