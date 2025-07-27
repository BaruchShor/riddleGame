import {Player} from "../models/Player.js";
import readlineQuestion from "../models/readline.js";
import {getOBJList, updateOBJ} from "../CRUD/CRUDRiddleGame.js";
import {createPlayer} from "../CRUD/crudPlayer.js";
import riddlesList from "./riddleListCreator.js";
import {getThebestRecore} from "./playersListCreator.js";

export default async function displayGame(){
    const bestRecore = await getThebestRecore();
    console.log(bestRecore);
    console.log(`The best record is ${bestRecore.record}, from player ${bestRecore.playerName}. go it fucking over.`);
    const playerName = readlineQuestion(`Pleas enter your name.`);
    let player = await getOBJList(`players/name/${encodeURIComponent(playerName)}`);
    if(player.length <= 0){
        player = [await createPlayer()];
    };
    const gamer = new Player(player[0]);
    const riddles = await riddlesList();
    riddles.forEach(riddle => {
        gamer.recordTime(riddle.ask());
    });
    gamer.showStats(playerName);
    const recordObj = {
        filter : {
            id : gamer.id
        },
        update : {
            key : "record",
            value : gamer.record
        }
    };
    console.log(recordObj);
    const res = await updateOBJ(`players`, recordObj);
};