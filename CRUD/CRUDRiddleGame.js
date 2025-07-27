 // Read
async function getOBJList(path){
    return await fetch(`https://riddleservies.onrender.com/${path}`)
    .then(res => {return res.json()})
    .catch((err) => console.log(err)
)};

// Create
async function createOBJ(path, Obj){
    return await fetch(`https://riddleservies.onrender.com/${path}`,{
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
async function updateOBJ(path, Obj){
    try{
        return await fetch(`https://riddleservies.onrender.com/${path}`,{
            method: 'PUT',
            body: JSON.stringify(Obj),
            headers:{
                "Content-Type": "application/json"
            },
        });
    }catch(error){
        throw error;
    };
};

// Delete
async function deleteOBJ(path, Obj){
    return await fetch(`https://riddleservies.onrender.com/${path}`,{
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

export { getOBJList, createOBJ, updateOBJ, deleteOBJ };
