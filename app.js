
let listaNumerosSorteados = [];
let numeroLimite = 100;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');
}

exibirMensagemInicial();

exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');

let numeroSecreto = gerarNumero();
function gerarNumero() {
    let numeroEscolhido = parseInt((Math.random() * numeroLimite) + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

let tentativas = 1;
function verifyEnterButton(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!!!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute( 'disabled');
    } else {
        if ( chute > numeroSecreto ) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    console.log(chute == numeroSecreto);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


////////////////////////////////////Exercicios
/*
function olaMundo() {
    console.log('Olá Mundo');
}
olaMundo();

function exibirNome(nome) {
    console.log(`Olá ${nome}`);
}
exibirNome('Flávio');

function dobrarValor(numero) {
    console.log(`${numero}` * 2);
}
dobrarValor('5');

function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(10);
  console.log(resultadoDobro);

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(6, 8, 10);
  console.log(media);

function maiorNumero(a,b) {
    return a > b ? a : b;
}

let maiorNumeroEscolhido = maiorNumero(9,8);
console.log(maiorNumeroEscolhido);

function multiplicaNumero(valor) {
    return valor * valor;
}

let valorNumero = multiplicaNumero(4);
console.log(valorNumero);


// Exercício IMC
function indiceMassaCorporal(peso,altura) {
    return (peso / ((altura * altura)/10000));
}
let imc = indiceMassaCorporal(91,170);
console.log(imc);

// Exercício conversão real para dolar
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
   let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// Exercicio area e perimetro sala retangular
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

//Exercicio area e perimetro sala circular
function calcularAreaPerimetroSalaCircular(raio) {
    let area = (raio * raio) * Math.PI;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área da sala Circular é ${area.toFixed(2)} metros quadrados`)
    console.log(`Perímetro da sala Circular é ${perimetro.toFixed(2)} metros`);
}

let raio = 5;
calcularAreaPerimetroSalaCircular(raio);

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);
 

let listagenerica = [];
let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

linguagensDeProgramacao.push('Java','Ruby','GoLang');

let nomesAleatorios = ['Flávio','Ingridy','Otávio'];
console.log(nomesAleatorios[0]);
console.log(nomesAleatorios[1]);
console.log(nomesAleatorios[2]);
 */