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
    id: 0,
    name: "",
    record: 0,
    getId: function () {
        this.id = getPlayerId();
    },
    getName: function () {
      this.name = readlineQuestion(`Pleas enter your name.`);
    },
  };
  newPlayer.getName();
  newPlayer.getId();
  createOBJ("players", newPlayer);
  return newPlayer;
};

//need to get an object of tow objects, 1 for fiter(id, id-number) and 2 for update.
function updatePlayer() {
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
  updateOBJ("players", obj);
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
