import readlineQuestion from "./models/readline.js";
import crudFunctions from "./CRUDRiddleGame.js"
import displayGame from "./gameManager.js";

const MenusObj = {
    appMenu : ["press 1 to play a game.", "press 2 to do actions.", "press 3 to exit"],
    actionRiddleMenu : ["1 to see all readle", "2 to create riddle", "3 to update riddle", "4 to delete riddle.\n"],
    actionPlayerMenu : ["1 to see all Player", "2 to create Player", "3 to update Player", "4 to delete Player.\n"]
};

function showMenu(Obj){
    for(let i = 0; i < arr.length; i ++){
        console.log(arr[i]);
    }
}

function getChoose(){
    let choose;
    do{
        choose = readlineQuestion("Pleas enter your choos");
    }while(choose < 1 || choose > 3)
    return choose
}

function displayMenu(){
    let menuCoose;
    do{

    }while(menuCoose != "exit");
}



displayMenu();
