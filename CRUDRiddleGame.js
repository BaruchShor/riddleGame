 // Read
 export async function getOBJList(path){
    return await fetch(`https://riddleservies.onrender.com/${path}`)
    .then(res => {return res.json()})
    .catch((err) => console.log(err)
)};

// Create
export function createOBJ(path, Obj){
    fetch(`https://riddleservies.onrender.com/${path}`,{
    method: 'POST',
    body: JSON.stringify(Obj),
    headers:{
        "Content-Type": "application/json"
    },
})
.then(res => res.json()
).catch(err => console.log(err.message))
};

// Update
export function updateOBJ(path, Obj){
    fetch(`https://riddleservies.onrender.com/${path}`,{
    method: 'PUT',
    body: JSON.stringify(Obj),
    headers:{
        "Content-Type": "application/json"
    },
})
.then(res =>{
    return res.json()
}).catch(err => console.log(err.message))
};

// Delete
export function deleteOBJ(path, Obj){
    fetch(`https://riddleservies.onrender.com/${path}`,{
    method: 'DELETE',
    body: JSON.stringify(Obj),
    headers:{
        "Content-Type": "application/json"
    },
})
.then(res =>{
    return res.json()
}).catch(err => console.log(err.message))
};
