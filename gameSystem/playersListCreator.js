import { getOBJList } from "../CRUD/CRUDRiddleGame.js";
import {Player} from "../models/Player.js";

export async function getPlayers(){
    const players = await getOBJList('players');
    const playersArr =  Object.values(players).map(player => new Player(player));
    return playersArr.sort((a , b) => a.record - b.record);
};

async function liderBoard(){
    const players = await getOBJList('players');
    return players.sort((a , b) => a.record - b.record);
};

export async function showLeaderBoard(){
    const leaderBoardList = await liderBoard();
    leaderBoardList.forEach(player => {
        console.log(`Player name - ${player.name} ::: Record - ${player.record}.`);
    });
};

export async function getThebestRecore(){
    const player = await getOBJList('players/top');
    return player[0];
};