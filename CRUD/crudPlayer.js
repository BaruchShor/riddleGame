import readlineQuestion from "../models/readline.js";
import { getOBJList, createOBJ, updateOBJ, deleteOBJ } from "./CRUDRiddleGame.js";

function getPlayerId(){
    let playerId;
    do{
        playerId = readlineQuestion("Please Enter an id of player.\n");
        playerId = parseInt(playerId);
    }while(isNaN(playerId));
    return playerId;
};

async function getAllPlayers() {
  try {
    const players = await getOBJList(`players`);
    return players;
  } catch (error) {
    return error.message;
  };
};

async function createPlayer() {
  const newPlayer = {
    name: "",
    id: 0,
    role : "",
    record: 0,
    getName: function () {
      this.name = readlineQuestion(`Pleas enter your name.`);
    },
    getId: function () {
        this.id = getPlayerId();
    },
    getRole : function(){
    do{
        this.role = readlineQuestion("Please enter your role (user or asmin).");
    }while(this.role != "user" && this.role != "admin");
    },
  };
  newPlayer.getName();
  newPlayer.getId();
  newPlayer.getRole();
  await createOBJ("players", newPlayer);
  return newPlayer;
};

//need to get an object of tow objects, 1 for fiter(id, id-number) and 2 for update.
async function updatePlayer() {
  const obj = {
    filter: {
      id: "",
      getid: function () {
        this.id = getPlayerId();
      },
    },
    update: {
      key: "",
      value: "",
      getKey: function () {
        do {
          this.key = readlineQuestion(
            "Please enter a valid parameter to update (id, name)."
          );
        } while (this.key !== "id" && this.key !== "name");
      },
      getValue: function () {
        this.value = readlineQuestion("Please enter the new value to update.");
      },
    },
  };
  obj.filter.getid();
  obj.update.getKey();
  obj.update.getValue();
  console.log(obj);
  await updateOBJ("players", obj);
  return obj;
};

//
function deletePlayer() {
  const obj = {
    id: "",
    getId: function () {
      this.id = getPlayerId();
    },
  };
  obj.getId();
  deleteOBJ(`players`, obj);
  return obj;
};

export { getAllPlayers, createPlayer, updatePlayer, deletePlayer };
