import path from 'node:path';
import fs from 'node:fs/promises';
import { cwd } from 'node:process';
import { getUserInput } from '../utils/getUserInput.js';

export default async function    addTask() {

    const filePath = path.resolve(cwd(), 'src', 'DB', 'tasks.json');
    try
    {
        const data = await fs.readFile(filePath, 'utf-8');
        const tasks = JSON.parse(data);
        let isAdded = false;
        await getUserInput("Enter task description: ")
        .then((desc) => {
            console.log(`desc: ${desc}`);
            tasks.forEach(element => {
                if (element.description === desc) {
                    isAdded = true;
                    console.log(`The Task '${desc}' already added.`);
                }
                console.log(`id: ${element.id}, Desc: ${element.description}, Status: ${element.status}`);
            });
            if (!isAdded) 
                tasks.push(newTaskObj(tasks.length + 1, desc, "todo"));
        })
    } catch (err) {
        console.log(`error --->: ${err}`);
    }
    console.log("added successfully!");
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