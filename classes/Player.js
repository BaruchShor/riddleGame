export class Player{
    constructor(name){
        this.name = name;
        this.timesArr = [];
    }

    recordTime(time){
        this.timesArr.push(time / 1000);
    }

    showStats(name){
        let totaltime = 0;
        this.timesArr.forEach(time => {
            totaltime += time;
        })
        console.log(`${name} very nice!. The total time for the game is ${totaltime}:\n
        The avarage for each answer is ${totaltime / this.timesArr.length}:`);
    }

}