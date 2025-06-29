import {riddlesList} from "./riddleListCreator.js";
import {Player} from "./classes/Player.js";
import readlineQuestion from "./classes/readline.js";

export default function displayGame(){
    const playerName = readlineQuestion(`Pleas enter your name.`);
    const newPlayer = new Player(playerName);
    const riddles = riddlesList();
    riddles.forEach(riddle => {
        newPlayer.recordTime(riddle.ask());
    });
    newPlayer.showStats(playerName);
};