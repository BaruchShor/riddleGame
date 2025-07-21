import readlineQuestion from "../models/readline.js";
import { createOBJ } from "../CRUDRiddleGame.js";

export default function getNewRiddle(){
    const newRiddle = {
        level : "",
        name : "",
        taskDescription : "",
        correctAnswer : "",
        getLevel: function(){
        do{
            this.level = readlineQuestion(`Pleas the level, from 1 to 3.`);
        }while(this.level < 1 || this.level > 3);
            return this.level;
        },
        getName: function(){
            if(this.level == 1){
                this.name = "Easy Math";
            }else if(this.level == 2){
                this.name = "Medume";
            }else{
                this.name = "Difficult";
            }
        },
        getRiddle:function(){
            this.taskDescription = readlineQuestion("Please Enter the new riddle\n");
        },
        getcorrectAnswer: function(){
            this.correctAnswer = readlineQuestion("Please enter the correct answer.");
        }
    }
    newRiddle.getLevel();
    newRiddle.getName();
    newRiddle.getRiddle();
    newRiddle.getcorrectAnswer();
    createOBJ('riddles',newRiddle);
    return newRiddle;
};

getNewRiddle();