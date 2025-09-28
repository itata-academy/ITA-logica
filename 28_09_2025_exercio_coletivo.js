/*

Objectivo: Simular um sistema de reserva para um teatro

Regras:
    - 5 filas com 10 assentos
    - Assento pode estar livre ou ocupado
        - L, X

O que temos que fazer

    - Mostrar o mapa atual dos assentos(L = livre, X = ocupado)
    - Perguntar se quer fazer uma reserva
    - Se ele digitar n: Sair
    - Se ele digitar s: continuar
    - Solicitar numero da fila e do assento
    - Se estiver livre: reservar
    - Se estiver ocupado: inforamar que esta ocupado

*/
const teatro = [];

function zerarAssentos() {
    for(let i = 0; i < 5; i++) {
        teatro[i] = [];
        
        for(let j = 0; j < 10; j++) {
            teatro[i][j] = "L";
        }
    }
}

function mostarMapa() {
    console.log("Novo mapa: ")

    for(let i = 0; i < 5; i++) {
        console.log(teatro[i])
    }
}

function verificarAssentoLivre(fila, assento) {
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 10; j++) {
            if(fila == i && assento == j && teatro[i][j] == "X") return false;
        }
    }

    return true;
}

function main() {
    const prompt = require('prompt-sync')();
    zerarAssentos();
    mostarMapa();

    let resposta = "";

    do {
        resposta = prompt("Deseja fazer uma reserva? n/s: ");
        
        if(resposta == 's') {
            let fila = Number(prompt("Informe o numero da fila: "));
            let assento = Number(prompt("Informe o numero da assento: "));

            const assentoLivre = verificarAssentoLivre(fila, assento);

            if(assentoLivre) {
                teatro[fila][assento] = "X";
                mostarMapa();
            } else {
                console.log("Assento ocupado")
            }
        }
    } while(resposta != "n");

    console.log("Volte sempre!")
}


main();


/*

Tarefa

- Vao fazer sem usar o while ou do while
- Verificar se o numero de fila e de assentos existem no teatro
- Mostrar mapa mais bonito
- Sem pedir fila e assento separadamente
- Dar possibilidade de cancelar reserva

*/