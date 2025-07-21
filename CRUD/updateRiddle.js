import readlineQuestion from "../models/readline.js";

export default function updateRiddle(){
    const upObj = {
        idParameter: "",
        parameterToChange : "",
        newParameter : "",
        getIdParameter: function(){
            this.idParameter = readlineQuestion(`Please enter the idParameter.\n`);
            return this.idParameter;
        },
        getParameterToChange: function(){
            this.parameterToChange = readlineQuestion(`Please enter the parameterToChange.\n`);
            return this.parameterToChange;
        },
        getNewParameter:function(){
            this.newParameter = readlineQuestion("Please Enter the newParameter\n");
        }
    }
    upObj.getIdParameter();
    upObj.getParameterToChange();
    upObj.getNewParameter();
    return upObj;
}