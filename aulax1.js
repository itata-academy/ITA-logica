let nome  = "Kwenda";
let idade = 16;


console.log("Tipo de dado: " + typeof nome);
console.log("Tipo de dado: " +  idade instanceof "number");

const numeros = [1, 2, 3, 4, 5];

const pessoa = {
  nome: "Kwenda",
  idade: 16,
  cidade: "Maputo",
  
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
