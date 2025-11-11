//let documentoTitulo = document.querySelector('h1');
//documentoTitulo.innerHTML = 'Jogo do número secreto';
//document.querySelector('h1').innerHTML = 'Bem-vindo ao mundo dev';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numeroSecretoSorteado = [];

tentativaMaximo = 10;

function gerarNumeroAleatorio() {
    //return parseInt((Math.random() * tentativaMaximo) + 1);
    let tentativas = numeroSecretoSorteado.length;

    if (tentativas == 9) {
        numeroSecretoSorteado = [];
    }

    let numeroNovo = parseInt((Math.random() * tentativaMaximo) + 1);
    if (numeroSecretoSorteado.includes(numeroNovo)) {
        return gerarNumeroAleatorio()
    } else {
        numeroSecretoSorteado.push(numeroNovo);
        console.log(numeroSecretoSorteado)
        return numeroNovo;
    }
}

let numeroSecreto = gerarNumeroAleatorio();

function alterarTexto(tag, texto) {
let palavra = document.querySelector(tag);
palavra.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2} );
}

alterarTexto('h1','Jogo do número secreto');
alterarTexto('p','Escolha um número entre 1 e 10');

function limparChute() {
    document.querySelector('input').value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        alterarTexto('h1','Você acertou');
        alterarTexto('p','O Número secreto é '+numeroSecreto);
    } else if (chute > numeroSecreto) {
        alterarTexto('p','O número secreto é menor');
    } else {
        alterarTexto('p','O número secreto é maior');
    }
    limparChute()
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparChute()
    alterarTexto('h1','Jogo do número secreto');
    alterarTexto('p','Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
}
