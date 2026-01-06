import  path                from 'node:path';
import  fs                  from 'node:fs/promises';
import  { cwd }             from 'node:process';
import  { getUserInput }    from '../utils/getUserInput.js';
import  updateDb            from '../utils/updateDb.js';

export default async function    addTask() {

    const filePath = path.resolve(cwd(), 'src', 'DB', 'tasks.json');
    try
    {
        const data = await fs.readFile(filePath, 'utf-8');
        const tasks = JSON.parse(data);
        const desc = await getUserInput("Enter task description: ");
        let isAdded = false;
        tasks.forEach(element => {
            if (element.description === desc)
                isAdded = true;
            console.log(`id: ${element.id}, Desc: ${element.description}, Status: ${element.status}`);
        });
        if (!isAdded) { /*  prevent duplicat tasks  */ 
            tasks.push(newTaskObj(tasks.length + 1, desc, "todo"));
            await updateDb(filePath, tasks)
            .finally( () => console.log("new Task added to DataBase"));
        } else
            console.log("Task already added!");
    } catch (err) {
        console.log(`error: ${err}`);
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