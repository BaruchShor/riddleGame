import {readlindQuestion} from "./readline.js";

class Player{
    constructor(name){
        this.name = name;
        this.timesArr = [];
    }

    recordTime(start, end){
        return end - start;
    }

    showStats(){
        const totaltime = 0;
        this.timesArr.forEach(time => {
            totaltime += time;
        })
        console.log(`The total time for the game is ${totaltime}:\n
                     The avarage for each answer is ${totaltime / this.timesArr.length}:`);
        
    }

}