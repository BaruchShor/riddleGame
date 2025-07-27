import readlineQuestion from "../models/readline.js";
import { getOBJList, createOBJ, updateOBJ, deleteOBJ } from "./CRUDRiddleGame.js";

function getRiddleId(){
    let riddleId;
    do{
        riddleId = readlineQuestion("Please Enter an id of riddle.\n");
        riddleId = parseInt(riddleId);
    }while(isNaN(riddleId));
    return riddleId;
};

async function getAllRiddles() {
  try {
    const riddles = await getOBJList(`riddles`);
    return riddles;
  } catch (error) {
    return error.message;
  };
};

function cerateRiddle() {
  const newRiddle = {
    id : "",
    level: "",
    name: "",
    taskDescription: "",
    correctAnswer: "",

    getId : function(){
      this.id = getRiddleId();
    },

    getLevel: function () {
      do {
        this.level = readlineQuestion(`Pleas the level, from 1 to 3.`);
      } while (this.level < 1 || this.level > 3);
      return this.level;
    },

    getName: function () {
      if (this.level == 1) {
        this.name = "Easy Math";
      } else if (this.level == 2) {
        this.name = "Medume";
      } else {
        this.name = "Difficult";
      }
    },
    getRiddle: function () {
      this.taskDescription = readlineQuestion("Please Enter the new riddle\n");
    },
    getcorrectAnswer: function () {
      this.correctAnswer = readlineQuestion("Please enter the correct answer.");
    },
  };
  newRiddle.getLevel();
  newRiddle.getName();
  newRiddle.getRiddle();
  newRiddle.getcorrectAnswer();
  createOBJ("riddles", newRiddle);
  return newRiddle;
};

//need to get an object of tow objects, 1 for fiter(id, id-number) and 2 for update.
function updateRiddle() {
  const obj = {
      filter: {
        id: "",
      },
      update: {
        key: "",
        value: "",
      },
  };
  function getid() {
    filter.id = getRiddleId();
  };
  function getKey () {
    do {
      update.key = readlineQuestion(
        "Please enter a valid parameter to update (id, name)."
      );
    } while (update.key !== "id" && update.key !== "name");
  };
  function getValue() {
    update.value = readlineQuestion("Please enter the new value to update.");
  };
  getid();
  getKey();
  getValue();
  updateOBJ(`riddles`, obj);
  return obj;
};

function deleteRiddle() {
  const upObj = {
    id: "",
    getIdParameter: function () {
      this.id = getRiddleId();
    },
  };
  upObj.getIdParameter();
  deleteOBJ("riddles", upObj);
  return upObj;
};

export { getAllRiddles, cerateRiddle, updateRiddle, deleteRiddle };
