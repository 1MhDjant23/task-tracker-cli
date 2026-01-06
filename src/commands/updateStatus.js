import path from 'node:path';
import getTasks from "../utils/getTasks";
import { getUserInput } from "../utils/getUserInput";
import updateDb from '../utils/updateDb';

export default async    function updateState(status) {
    const   idx = await getUserInput("Enter Task ID To Update: ");
    const   newStat = await getUserInput("Set New Status: ");
    let     tasks = await getTasks();
    const   updatedTasks = tasks.map( (task) => {
        if (task.id === Number(idx))
            return {...task, "status": newStat};
        return {...task};
    })
    const   filePath = path.resolve(process.cwd(), 'src', 'DB', 'tasks.json');
    await updateDb(filePath, updatedTasks);
    console.log(`Task ${idx} Updated To ${newStat}`);
}