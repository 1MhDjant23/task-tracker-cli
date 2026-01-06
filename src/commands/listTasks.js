import getTasks from '../utils/getTasks.js';

export default async  function listTasks() {
    const   tasks = await getTasks();

    console.log(`List Of Tasks`);
    tasks.forEach(task => {
        console.log(`Task ${task.id}`);
        console.log(`Description:   '${task.description}'.`);
        console.log(`Status     :   '${task.status}'.`);
        console.log(`CreatedAt  :   '${task.createdAt}'.`);
        console.log(`UpdatedAt  :   '${task.updateAt}'.`);
        console.log(String("_").repeat(8));
    });
}