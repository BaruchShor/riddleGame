import readline from "readline-sync";

export default function readlineQuestion(massege){
    const input = readline.question(`${massege}\n`);
    return input;
}