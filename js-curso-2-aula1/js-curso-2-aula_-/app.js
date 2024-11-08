let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log(`O número é ${numeroSecreto}`);
let tentativas = 1;
 
function exibirTexto(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female' , {rate:1.2});
}

function exibirMensagens(){
    exibirTexto('h1' , 'Jogo do número secreto');
    exibirTexto('p' , 'Escolha um número entre 1 e 10:');
}

exibirMensagens();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
       if (chute == numeroSecreto){
        exibirTexto('h1' , 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        exibirTexto('p' , `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
       } else {
        if (chute < numeroSecreto){
            exibirTexto('p' , 'O número secreto é maior.');
        } else {
            exibirTexto('p' , 'O número secreto é menor.');
        }
        limparCampo(); 
       }
       tentativas++;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumeros.length;
    
    if (quantidadeDeElementos == numeroLimite){
        listaDeNumeros = [];
    }

    if (listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagens();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}