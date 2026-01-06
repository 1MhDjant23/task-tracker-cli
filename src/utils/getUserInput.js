import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function getUserInput(query) {
    const   rl = readline.createInterface({ input, output });
    try {
        const   answer = await rl.question(query);
        return answer;
    } finally {
        rl.close();
    }
}