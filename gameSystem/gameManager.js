import {Player} from "../models/Player.js";
import readlineQuestion from "../models/readline.js";
import {getOBJList, updateOBJ} from "../CRUD/CRUDRiddleGame.js";
import {createPlayer} from "../CRUD/crudPlayer.js";
import riddlesList from "./riddleListCreator.js";

export default async function displayGame(){
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
    const recordObj = {
        record : gamer.record
    };
    updateOBJ(`players/name/${encodeURIComponent(playerName)}`, {recordObj});
    gamer.showStats(playerName);
};

//await displayGame();