import readlineQuestion from "../classes/readline.js";
import fs from "node:fs/promises";

function getNewRiddle(){
    const newRiddle = readlineQuestion("Please Enter the new riddle\n");
    return newRiddle;
}

export function createRiddle(data){
    data.push(getNewRiddle())
    fs.writeFile("RiddleCRUD/riddlesDataBase.txt",JSON.stringify(data));
}