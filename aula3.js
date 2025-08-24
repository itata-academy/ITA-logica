// Funcões

// const datas = [2007, 2003, 2002, 2012, 2008];

// let quantidadeAdulto = 0;

// for(let i = 0; i < datas.length; i++) {
//   const idade = calculaIdade(datas[i]);
  
//   if(idade >= 18) {
//     quantidadeAdulto++;
//   }
// }


// console.log("Quantidade de pessoas maiores de 18: "+ quantidadeAdulto);

// function calculaIdade (dataDeNascimento) {
//   const anoAtual = 2025;
//   const idade = anoAtual - dataDeNascimento;
//   return idade;
// }


// const idade = calculaIdade();
// if (idade >= 18) {
//   console.log("Maior de idade");
// }else {
//   console.log("Menor de idade");
// }

// 11 101 212 1001 10101 1001001  2010202

// const numero = 2010202;
// const numeroString = numero+"";

// let ePolindrono = true;

// for(let i=0; i < numeroString.length; i++) {
//   let posicaoEspelhada = numeroString.length - 1 - i;

//   if(numeroString[i] !== numeroString[posicaoEspelhada]) {
//     ePolindrono = false;
//   }
// }

// console.log("O numero "+numero+" e palindrono ? "+ePolindrono)





// Faça um programa que dita se o nome da pessoa é especial e o nivel.
// Um nome é especial se começa com uma vogal e com uma vogal, 
// e o nivel é difinido consoante o numero de vogal, 
// sendo 2 vogais = nivel 1, 3 vogais = nivel 2 ...

//Ex: Eva  = nivel 1
// Antonio = nivel 3


const nome = "francisco";
let primeira_letra = nome[0];
let ultima_letra =nome[nome.length-1];
let contaVogal = 0;



for(let i = 0; i < nome.length; i++){
  if(eVogal(nome[i])) {
    contaVogal++;
  }
}   

if(eVogal(primeira_letra) && eVogal(ultima_letra)){
    console.log(nome+" é especial");
    console.log("O nivel é: "+ (contaVogal - 1));
}else{
    console.log("não é especial");
}


function eVogal(letra) {
  let vogais= ['a','e','i','o','u'];
  for (let i = 0; i < vogais.length; i++ ){
    if(letra == vogais[i]){
        return true;
    }
  }
  return false;
}
