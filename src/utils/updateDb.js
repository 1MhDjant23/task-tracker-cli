import  fs from 'node:fs/promises';

export default async function  updateDb(filename, newTasks) {
    await fs.writeFile(filename, JSON.stringify(newTasks, null, 2), 'utf-8');
}