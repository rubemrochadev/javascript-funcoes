//Questões de funções sem parâmetros

// function contarAteDez(params) {
//     let atual = newDate

// // contarAteDez();

// Questão 3 - Função para mostrar a data e hora atual

// function mostrarDataHora(){
//     let data = new Date();
//     console.log(data.toLocaleDateString("pt-BR"));
//     console.log(data.toLocaleTimeString("pt-BR"));
//     console.log(data.toLocaleString("pt-BR")); 
    
// }

// mostrarDataHora()

// // Questão 4 - Função para imprimir a tabuada do 3

// function name(params) {
    
// }

// Questão 5 - Função para exibir um alerta na tela

// function mostrarAlerta(){
//     alert("Isso é um alerta do JS!");
    
// }

// mostrarAlerta()






//Questões de funções com parâmetros

// 2 - Função para repetir uma palavra várias vezes Crie uma função chamada repetirPalavra(palavra, vezes), que recebe uma palavra e um número e a exibe repetida no console. Exemplo: repetirPalavra("JavaScript", 3) → Exibe "JavaScript JavaScript JavaScript".

function repetirPalavra(palavra, vezes){
    for (let i = 0; i < vezes; i++){
        console.log(palavra);    
    }
}

repetirPalavra("javascript",5)