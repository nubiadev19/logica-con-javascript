let titulo=document.querySelector("h1");
titulo.innerHTML="juego del número secreto";

let numeroMaximo=10;
let parrafo=document.querySelector("p");
parrafo.innerHTML=`Indica un número del 1 al ${numeroMaximo}`;

function intentoDeUsuario(){
   alert("Click en el botón");
   console.log("click en el botón");
}