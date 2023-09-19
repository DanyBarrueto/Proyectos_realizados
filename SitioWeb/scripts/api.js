//Esto de arroba es una promesa con la cual se puede cumplir o no se va a cumplir o esta pendiente
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json)
    .then((json) =>{
        for (let e of json){
            console.log(e);
        }
    })   
    .catch((err)=>console.error(err))
    .finally(console.info("finalizacion de petición"));
    