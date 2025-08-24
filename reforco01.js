const prompt = require('prompt-sync')();

// Numeracao 1 a 10
// while do while for
// for - quando sabes a quantidade exeta
// for (inicilizacao; condicao; incrementacao)

// for(let numero = 1; numero <= 10; numero++) {
//   console.log(numero);
// }

// let numero = 1;
// while(numero <= 10) {
//   console.log(numero);
//   numero = numero + 1;
// }


// let numero = 1;
// do {
//   console.log(numero);
//   numero = numero + 1;
// } while(numero <= 10);

// 1
// 0 1 
// 0 1 2 3 
// 0 1 2
// 0
// 0 2 4 6 8 10

// imprimir os pares 
// e que não contêm o numero 2


let numero;

do {
  numero = parseFloat(prompt("Digite um numero: "));
  for(let i=0; i <= numero; i ++) {
    let numeroEmLetra = i+"";
    if (i%2==0 && !contem(numeroEmLetra, "1") && !contem(numeroEmLetra, "2") && !contem(numeroEmLetra, "3")) {
      console.log(i);
    }
  }
// 
} while(numero >= 0);


// doisOfobico - é todo numero que nao contem 2

// numero = parseFloat(prompt("Digite um outro numero: "));

// let numeroEmLetra = numero+"";
// let numeroContem2 = false;

// for(let j =0; j < numeroEmLetra.length; j++) {
//   if (numeroEmLetra[j] === "2") {
//     numeroContem2 = true;
//   }
// }

// if(!numeroContem2) {
//   console.log("O numero é Doisofobico")
// }





function contem(palavra,letra) {
  for(let i =0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
      return true;
    }
  }
  return false;
}
