import readlineQuestion from "../models/readline.js";
import displayGame from "./gameManager.js";
import { getAllPlayers, createPlayer, updatePlayer, deletePlayer } from "../CRUD/crudPlayer.js";
import { getAllRiddles, cerateRiddle, updateRiddle, deleteRiddle } from "../CRUD/crudRiddle.js";

const MenusObj = {
    appMenu : ["press 1 to play a game.", "press 2 to do actions of riddles.","press 3 to do actions of players.", "press 4 to exit"],
    actionRiddleMenu : ["1 to see all readle", "2 to create riddle", "3 to update riddle", "4 to delete riddle.\n"],
    actionPlayerMenu : ["1 to see all Player", "2 to create Player", "3 to update Player", "4 to delete Player.\n"]
};

const actionRiddleMenu = {
    1 : getAllRiddles,
    2 : cerateRiddle,
    3 : updateRiddle,
    4 : deleteRiddle,
};

const actionPlayerMenu = {
    1 : getAllPlayers,
    2 : createPlayer,
    3 : updatePlayer,
    4 : deletePlayer,
};

const appMenu = {
    1 : displayGame,
    2 : () => showMenuOptions(MenusObj.actionRiddleMenu, actionPlayerMenu),
    3 : () => showMenuOptions(MenusObj.actionPlayerMenu, actionPlayerMenu),
    4 : () => {return "exit"}
};

async function showMenuOptions(arr, obj){
    let choose;
    for(let i = 0; i < arr.length; i ++){
        console.log(arr[i]);
    };
    choose = getChoose(arr.length);
    //console.log(choose);
    await obj[choose]();
    if(choose == 4){
        return "exit"
    };
    return choose;
};

function getChoose(border){
    let choose;
    do{
        choose = readlineQuestion("Pleas enter your choos");
        choose = parseInt(choose);
    }while(choose < 1 || choose > border);
    return choose
};

export default async function displaySystem(){
    console.clear();
    let appMenuCoose;
    do{
        appMenuCoose = await showMenuOptions(MenusObj.appMenu, appMenu);
    }while(appMenuCoose != "exit");
    console.log("Thank you");
};