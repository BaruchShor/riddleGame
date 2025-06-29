import riddesObg from "../riddles/ImportRiddles.js";
import {Riddle} from "./classes/Riddle";

export function riddlesList(){
    return riddesObg.map(riddleObj => new Riddle(riddleObj.id, riddleObj.name, riddleObj.taskDescription, riddleObj.correctAnswer));
};