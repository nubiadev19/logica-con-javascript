//let numeroSecreto = 6;
//let numeroUsuario = prompt("Me indicas un n�mero por favor:");

//console.log(numeroUsuario);

//if (numeroUsuario == numeroSecreto) {${intentos == 1 ? "intento" : "intentos"}
//  alert('Acertaste el n�mero');
//}
alert("Bienvenidos al juego del número secreto");
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;    //numero de intentos=contador del bucle while
//let palabraIntentos='intento'; se mejoro a ${intentos == 1 ? "intento" : "intentos"}
let numeroMaximoIntentos=3;

console.log(numeroSecreto);

while (numeroSecreto != numeroUsuario) {
  numeroUsuario = prompt("me indicas un número del 1 al 10 por favor");
  console.log(numeroUsuario);
  console.log("resultado de la comparación", numeroUsuario == numeroSecreto)
  if (numeroUsuario == numeroSecreto) {
    alert(`acertaste,  el número es: ${numeroUsuario}. Lo hicicste en ${intentos} `);

  } else {

    if (numeroUsuario < numeroSecreto) {
      alert("el número secreto es mayor");
    } else {
      alert("el número secreto es menor");
    }
    intentos++;
    
  } if (intentos > numeroMaximoIntentos) {
    alert(`Llegaste al número máximo de intentos, el número secreto era: ${numeroSecreto}`);
    break;
  }
}