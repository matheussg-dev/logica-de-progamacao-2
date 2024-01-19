//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Número secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um número entre 1 a 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Número secreto.');
exibirTextoNaTela('P', `Escolha um número entre 1 a ${numeroLimite}.`);
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menagemTtentaiva = `você descobriu o número secreto com ${palavraTentativa} ${tentativas}!`;
        exibirTextoNaTela('p', menagemTtentaiva);
        document.getElementById("reiniciar").removeAttribute('disabled');
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
   let numeroEscolhido = parseInt(Math.random() * `${numeroLimite}` + 1);
   let quantidadeDeNumeroNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeNumeroNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarUmNumeroAleatorio();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }
}

function reiniciarJogo() {
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute('disabled', true);
}
