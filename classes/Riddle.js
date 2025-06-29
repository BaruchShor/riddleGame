import readlineQuestion from "./readline.js";

export class Riddle{
    constructor(id, name, taskDescription, correctAnswer){
        this.id =  id,
        this.name = name,
        this.taskDescription = taskDescription,
        this.correctAnswer = correctAnswer
    }

    ask(){
        let answer;
        console.log(this.taskDescription)
        const start = Date.now();
        do{
            answer = readlineQuestion(`Please enter your answer!`);
        }while(answer != this.correctAnswer);
        const end = Date.now();
        return end - start;
    }
}