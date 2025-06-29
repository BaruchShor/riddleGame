import readline from "readline-sync";

export default function readlindQuestion(massege){
    const input = readline.question(`${massege}\n`);
    return input;
}