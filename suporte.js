const prompt = require('prompt-sync')();

const NOME_INDICE = 0;
const IDADE_INDICE = 1;
const GENERO_INDICE = 2;
const NOTA_1_INDICE = 3;
const NOTA_2_INDICE = 4;


// Receber os dados 
// 30 - Nome Idade Genero Nota1 Nota2

// let alunos = ["Cardoso", 17, "m", 12, 20, "Brandao", 15, "m", 19, 15, "Joana", 13, "f", 9, 5];


// for(let i = 0; i  < alunos.length; i +=5) {
//   const nomeIndice = i;
//   const idadeIndice = i+1;
//   const generoIndice = i+2;
//   const nota1Indice = i+3;
//   const nota2Indice = i+4;

//   console.log("----------------------------------------------------------------");
//   console.log("Aluno: "+alunos[nomeIndice]);
//   console.log("Idade: "+alunos[idadeIndice]);
//   console.log("Genero: "+alunos[generoIndice]);
//   console.log("Nota 1: "+alunos[nota1Indice]);
//   console.log("Nota 2: "+alunos[nota2Indice]);
//   console.log("----------------------------------------------------------------");
// }


// let alunosNome = ["Cardoso", "Brandao","Joana"];
// let alunosIdade = [17, 15, 13];
// let alunosGenero = ["m", "m", "f"];
// let alunosNota1 = [20, 15, 9];
// let alunosNota2 = [20, 15, 5];
// const quantidadePropriedade = alunosNome.length;

// for(let i = 0; i < quantidadePropriedade; i++) {
//   console.log("----------------------------------------------------------------");
//   console.log("Aluno: "+alunosNome[i]);
//   console.log("Idade: "+alunosIdade[i]);
//   console.log("Genero: "+alunosGenero[i]);
//   console.log("Nota 1: "+alunosNota1[i]);
//   console.log("Nota 2: "+alunosNota2[i]);
//   console.log("----------------------------------------------------------------");
// }

// Matriz

const alunos = [
  ["Cardoso", 17, "m", 12, 20],
  ["Brandao", 15, "m", 19, 15],
  ["Joana", 13, "f", 9, 5],
];

for(let i = 0; i < alunos.length; i++) {
  mostrarDados(
    alunos[i][NOME_INDICE], alunos[i][IDADE_INDICE], 
    alunos[i][GENERO_INDICE], alunos[i][NOTA_1_INDICE], 
    alunos[i][NOTA_2_INDICE]
  );
}

// length

function mostrarDados(nome, idade, genero, nota1, nota2) {
  console.log("----------------------------------------------------------------");
  console.log("Aluno: "+nome);
  console.log("Idade: "+idade);
  console.log("Genero: "+genero);
  console.log("Nota 1: "+nota1);
  console.log("Nota 2: "+nota2);
  console.log("----------------------------------------------------------------");
}