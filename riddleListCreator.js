import riddesObg from "./riddles/ImportRiddles.js";
import {Riddle} from "./classes/Riddle.js";

export function riddlesList(){
    return Object.values(riddesObg).map(riddleObj => new Riddle(riddleObj.id, riddleObj.name, riddleObj.taskDescription, riddleObj.correctAnswer));
};