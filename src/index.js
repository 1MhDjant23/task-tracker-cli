import { stdin as input, stdout as output } from 'node:process';


console.log('\n—— Menu ——\n1) add "task description".');
console.log('2) list.');
console.log('3) delete task:id.');
console.log('4) mark-in-progress task:id.');
console.log('5) mark-done task:id.');
console.log('6) update task:id "new description".');




const   [ , , cmd, ...rest] = process.argv;

console.log(`argv: ${cmd} - ${rest}`);

if (cmd === 'add' || cmd) {
    
}



// import fs from  'node:fs';
// import readline from 'node:readline/promises';
// import  { stdin as input, stdout as output } from 'node:process';


// const   rl = readline.createInterface( { input,  output } );

// async   function main() {
//     while(true) {
//         const choice = (await rl.question('\nMenu — (a)dd, (l)ist, (q)uit: ')).trim().toLocaleLowerCase();
//         if (choice === 'q' || choice === 'quit') break;

//         if (choice === 'a' || choice === 'add') {
            
//         }
    
    
//     }
//     console.log("breaking...");
// }

// try{
//     await main();
// } finally{
//     rl.close();
//     console.log("closed");
// }
// // process.exit(0);