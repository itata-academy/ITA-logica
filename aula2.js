


const prompt = require('prompt-sync')();









// for(let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//console.log(i);







// Estrutura de repetição for - usa quando sabemos o número de iterações que queremos fazer. 
// sintaxe: // for (inicialização; condição; incremento) {}


// for (let nota = 0; nota !== 20;) {
//   nota = prompt("Qual é a nota do aluno? ")
//   nota = parseInt(nota);
//  }

// while - usa quando não sabemos o número de iterações que queremos fazer.
// sintaxe: // while (condição) {}

// let nota = 0;
// while (nota !== 20) {
//   nota = prompt("Qual é a nota do aluno? ");
//   nota = parseInt(nota);
// }



// do while - executa pelo menos uma vez antes de verificar a condição.

// const prompt = require('prompt-sync')();

// let nota = 0;
// do {
//   nota = prompt("Qual é a nota do aluno? ");
//   nota = parseInt(nota);

// } while (nota !== 20);
// Arrays - são listas de valores que podem ser acessados por índices numéricos.

//const prompt = require('prompt-sync')();

//var limite = prompt("Digite o limite: ");

// let maiorNota = 0;
// let segundaMaiorNota = 0;
// for (let i = 0; i < 10; i++) {
//   nota = prompt("Qual é a nota do aluno? ");
//   nota = parseInt(nota);

//   if (nota > maiorNota) {
//     segundaMaiorNota = maiorNota;
//     maiorNota = nota;
//   }

//   if (nota > segundaMaiorNota && nota < maiorNota) {
//     segundaMaiorNota = nota;
//   }

// }

// console.log("A maior  nota é: "+ maiorNota);
// console.log("A 2 maior  nota é: "+ segundaMaiorNota);



// 

let notas = [1, 1, 1, 14, 15, 16, 20, 19, 1, 2, 2, 10];


for(let i = 0; i < notas.length; i++ ) {
  console.log(notas[i]) 
}