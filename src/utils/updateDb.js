import  fs from 'node:fs/promises';

export default async function  updateDb(filename, newTasks) {
    try {
        await fs.access(filename, fs.constants.F_OK | fs.constants.W_OK);
        await fs.writeFile(filename, JSON.stringify(newTasks, null, 2));
    } catch (error) {
        console.error(`Error filesystem: ${error}`);
    }
}