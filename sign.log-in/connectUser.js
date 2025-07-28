import readlineQuestion from "../models/readline.js";

async function playerConnect(path, Obj) {
  return await fetch(`https://riddleservies.onrender.com/players/${path}`, {
    method: "POST",
    body: JSON.stringify(Obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
}

export default async function connectPlayer(path) {
  const connect = {
    name: "",
    password: "",
  };
  function getName() {
    login.name = name = readlineQuestion(`Pleas enter your name.`);
  };
    function getid() {
    login.id = readlineQuestion(`Pleas enter your id.`);
  };
  function getPassword() {
    login.password = readlineQuestion(`Pleas enter your password.`);
  };
  getName();
  if (path === "signup") getid();
  getPassword();
  const res = await playerConnect(path, connect);
  if (res.status == 200 && path == "signup") await connectAfterSignup(connect);
  return res;
};

async function connectAfterSignup(logObj){
    await  playerConnect('login', logObj);
};
