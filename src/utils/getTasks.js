import  fs from 'node:fs/promises';
import path from 'node:path';

/**
 * helper function to get data from json file
 * @returns all tasks from DB as string.
 */

export  default async function    getTasks() {
    const   filePath = path.resolve(process.cwd(), 'src', 'Db', 'tasks.js');
    try {
        await fs.access(filePath, fs.constants.R_OK);
        const   data = await fs.readFile(filePath, 'utf-8');
        const   tasks = JSON.parse(data);
        return tasks;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}