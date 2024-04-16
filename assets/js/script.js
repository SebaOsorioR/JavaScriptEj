let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let error1 = document.getElementById("error1");


let btnEnviar = document.getElementById("btnEnviar");


let nombreV = "";
let apellidoV = "";

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    nombreV= nombre.value;
    apellidoV= apellido.value;


    if(nombreV === ""){
        error1.innerHTML= "";
        error1.style.color = "red";
        return;
    }

    console.log(typeof(nombreV));
    
    nombre.value ="";
    apellido.value ="";
    console.log("Envio de datos exitoso");
})