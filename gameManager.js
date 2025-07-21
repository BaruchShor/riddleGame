import {Player} from "./models/Player.js";
import readlineQuestion from "./models/readline.js";
import { getOBJList } from "./CRUDRiddleGame.js";
import createNewPlayer from "./CRUD/createPlayer.js";
import { riddlesList } from "./riddleListCreator.js";

export default async function displayGame(){
    const playerName = readlineQuestion(`Pleas enter your name.`);
    let player = await getOBJList(`players/name/${encodeURIComponent(playerName)}`);
    console.log(player);
    if(player.length <= 0){
        player = [await createNewPlayer()];
        console.log(player);
    };
    const gamer = new Player(player[0]);
    console.log(gamer);
    const riddles = await riddlesList();
    riddles.forEach(riddle => {
        gamer.recordTime(riddle.ask());
    });
    gamer.showStats(playerName);
};

await displayGame();
