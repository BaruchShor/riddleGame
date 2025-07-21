import readlineQuestion from "../models/readline.js";
import { createOBJ } from "../CRUDRiddleGame.js";

export default async function createNewPlayer(){
    const newPlayer = {
        id : 0,
        name : "",
        record : 0,
        getId:function(){
            this.id = readlineQuestion("Please Enter an id\n");
        },
        getName: function(){
            this.name = readlineQuestion(`Pleas enter your name.`);
        },
    }
    newPlayer.getName();
    newPlayer.getId();
    createOBJ('players',newPlayer);
    return newPlayer;
};