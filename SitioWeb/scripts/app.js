"use strict";
const buscando = document.getElementById("buscando");
const inputBuscar = document.getElementById("input_buscar");
const listado = document.getElementById("listPrice");
const fragment = new DocumentFragment();
const tem = document.getElementById("template").content;
const form = document.getElementById("form");
const enviar = document.getElementById("btnSend");

/*objeto de validacion. objeto literal del Js
Aca se valida el formulario*/
const formValid = {
    nombres: false,
    apellidos: false,
    mail: false,
    politica: false,
    celPhone: false,
};
//Envio del formulario
enviar.addEventListener("click", function(e){
    e.preventDefault(); //no se envia el formulario por lo tanto no se refesca
    console.log(Object.values(formValid));
    if(formValidValues(formValid)=== -1){
        alert("Enviando Formulario");
    }else{
        alert("Campos Invalidos");
    }
})

const formValidValues= (objeto)=>{
    const valores = Object.values(objeto);
    let Response = valores.findIndex(e=>e === false);
    return Response;
}

//validacién a través del cambio de los elementos del formulario
form.addEventListener("change", (e) => {
    const inputId = e.target.id;
    console.log(inputId);
    const myValue = e.target.value;
    console.log(myValue);
    const myClass = e.target.classList;
    console.log(myClass);
    //Funciones que agrega o quita estilos validos e invalidos
    const validClass = () => {
        myClass.add("is-valid");
        myClass.remove("is-invalid");
    };
    const invalidClass = () => {
        myClass.remove("is-valid");
        myClass.add("is-invalid");
    };
    switch (inputId) {
        case "names":
            const nombresRx =
                /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
            formValid.nombres = myValue.match(nombresRx) ? true : false;
            formValid.nombres ? validClass() : invalidClass();
            console.log(Object.values(formValid));
            break;
        case "lastNames":
            const apellidosRx =
            /^([a-zA-ZÀ-ÖØ-öø-ÿ]{5,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        formValid.apellidos = myValue.match(apellidosRx) ? true : false;
        formValid.apellidos ? validClass() : invalidClass();
        console.log(Object.values(formValid));
            break;
        case "mail":
            const mailRx = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
            formValid.mail = myValue.match(mailRx) ? true : false;
            formValid.mail ? validClass() : invalidClass();
            console.log(Object.values(formValid));
            break;
            case "celphone":
                const numerosRx = /^[0-9]{10,12}$/;
                formValid.celPhone = numerosRx.test(myValue);
                formValid.celPhone ? validClass() : invalidClass();
                console.log(Object.values(formValid));
                break;
//Validacion de la casilla
            case "checkPolitica":
                formValid.politica = e.target.checked;
                formValid.politica ? validClass() : invalidClass();
                console.log(Object.values(formValid));
            break;
    }
});

//Tarea poner validacion de celphone y politica y apellido
//Depaso volver a ponerlo en falso arriba

buscando.addEventListener("click", () => {
    if (inputBuscar.classList.contains("buscarOculto")) {
        inputBuscar.classList.remove("buscarOculto");
        inputBuscar.classList.add("buscarVisible");
    } else if (inputBuscar.classList.contains("buscarVisible")) {
        inputBuscar.classList.remove("buscarVisible");
        inputBuscar.classList.add("buscarOculto");
    }
});

async function obtenerLista() {
    const resp = await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((Response) => {
    const resultados = Response.data.results;
    let poke = [];
    for (const i in resultados) {
        poke.push(resultados[i]);
    }
    //console.log(poke);
    return poke;
    })
    .catch((error) => {
        console.error(error);
        return 0;
});
    return resp;
}
const data = await obtenerLista();

const comprobar = "content" in document.createElement("template");
if (comprobar) {
    console.log(data);
    data.forEach((element) => {
        console.log(element);
        tem.querySelector("#code").innerHTML = `Código ${element}`;
        tem.querySelector("a").innerHTML = `${element.url}`;
        const miElemento = tem.cloneNode(true);
        fragment.appendChild(miElemento);
    });
} else {
    console.log(data);
}
listado.appendChild(fragment);