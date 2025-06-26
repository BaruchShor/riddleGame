import riddesObg from "../riddles/ImportRiddles.js";
import readline from "readline-sync";
import {readlindQuestion} from "./readline.js";

class Riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id =  id,
        this.name = name,
        this.taskDescription = taskDescription,
        this.correctAnswer = correctAnswer
    }

    ask(){
        const answer = readlindQuestion();
    }
}


