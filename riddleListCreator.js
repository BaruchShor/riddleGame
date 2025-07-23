import { getOBJList } from "./CRUD/CRUDRiddleGame.js";
import Riddle from "./models/Riddle.js";
import readlineQuestion from "./models/readline.js";

async function getRiddleListByLevel(){
    let level;
    const riddlesList = await getOBJList('riddles');
    console.log(riddlesList);
    do{
        level = readlineQuestion(`Please enter a level, from 1 to 3\n`);
    }while(level < 1 || level > 3);
    return riddlesList.filter(obj => obj.level == level);
}

export default async function riddlesList(){
    const riddles = await getRiddleListByLevel();
    return Object.values(riddles).map(riddles => new Riddle(riddles.id, riddles.name, riddles.taskDescription, riddles.correctAnswer));
};