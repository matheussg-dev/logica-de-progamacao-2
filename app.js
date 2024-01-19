//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Número secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um número entre 1 a 10';

let numeroSecreto = gerarUmNumeroAleatorio()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto 
}

exibirTextoNaTela('h1', 'Número secreto')
exibirTextoNaTela('P', 'Escolha um número entre 1 a 10')


function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto);
}

function gerarUmNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1)
}