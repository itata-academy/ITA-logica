const numeros=[11,101,201,202,10,10001,1001001,34,44,12];
let quantidadePolindrono = 0;

for(let i = 0; i<numeros.length; i++){
  if(ehPolindrono(numeros[i])){
    console.log(numeros[i])
    quantidadePolindrono++;
  }
}

function ehPolindrono(numero){
  const numeroString = numero+"";
 
  for(let i = 0; i<numeroString.length; i++){
    let positacaoExtrema = numeroString.length - 1 - i;
    if(numeroString[i] !== numeroString[positacaoExtrema]){
      return false
    }
  }
 
  return true
}

console.log(quantidadePolindrono)

