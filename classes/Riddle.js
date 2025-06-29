import {readlindQuestion} from "./readline.js";

export class Riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id =  id,
        this.name = name,
        this.taskDescription = taskDescription,
        this.correctAnswer = correctAnswer
    }

    ask(){
        let answer;
        console.log(this.this.taskDescription)
        do{
            console.log(`Please enter your answer!`);
            answer = readlindQuestion();
        }while(answer != this.correctAnswer);
    }
}