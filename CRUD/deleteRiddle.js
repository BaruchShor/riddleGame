import readlineQuestion from "../models/readline.js";

export default function deleteRiddle(){
    const upObj = {
        id: "",
        getIdParameter: function(){
            this.id = readlineQuestion(`Please enter the id.\n`);
            return this.idParameter;
        },
    }
    upObj.getIdParameter();
    return upObj;
}