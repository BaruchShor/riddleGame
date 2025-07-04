import riddesObg from "./riddles/ImportRiddles.js";
// import difficultRiddesObg from "./difficultRiddles/importDifficultRiddles.js";
import {Riddle} from "./classes/Riddle.js";
import readlineQuestion from "./readline.js";


function getLevel(){
    const level = 0;
    do{
        level = readlineQuestion(`If you want low level press 1: else if you want high level press 2`);
    }while(level != 1 || level != 2);
    if(level === 1){
        return riddesObg;
    }else{
        return difficultRiddesObg;
    }
}

export function riddlesList(){
    const riddles = getLevel();
    return Object.values(riddles).map(riddles => new Riddle(riddles.id, riddles.name, riddles.taskDescription, riddles.correctAnswer));
};