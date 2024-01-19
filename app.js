//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Número secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um número entre 1 a 10';

let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Número secreto.');
exibirTextoNaTela('P', 'Escolha um número entre 1 a 10.');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menagemTtentaiva = `você descobriu o número secreto com ${palavraTentativa} ${tentativas}!`;
        exibirTextoNaTela('p', menagemTtentaiva);
        document.getElementById("reiniciar").removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
} 

function gerarUmNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo() {
    numeroSecreto = gerarUmNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute('disabled', )
}
