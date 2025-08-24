
// [11, 101, 201, 202, 10, 10001, 1001001]


const numeros = [11, 101, 201, 202, 10, 10001, 1001001, 34, 44, 12];
let quantidadePolindrono = 0;

for(let i=0; i < numeros.length; i++) {
  if(ehPolindrono(numeros[i])) {
    console.log(numeros[i])
    quantidadePolindrono++;
  }
}

function ehPolindrono(numero) {
  const numeroString = numero+"";
  
  for(let i =0; i < numeroString.length; i++) {
    let positacaoEstrama = numeroString.length - 1 - i; 
    if(numeroString[i] !== numeroString[positacaoEstrama]) {
      return false;
    }
  }

  return true;
}

// function ehPolindrono(numero) {
//   const numeroString = numero+"";
//   const stringInveritada = inverterString(numeroString);
//   return numeroString === stringInveritada;
// }

// function inverterString(string) {
//   let stringInveritada = "";
//   for(let i = string.length - 1; i >= 0; i--) {
//     stringInveritada += string[i];
//   }

//   return stringInveritada;
// }

console.log(quantidadePolindrono)

