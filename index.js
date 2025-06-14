//declaração das variáveis
let nomeUser;
let vitorias;
let derrotas;
let nivelAtual;

//Declaração da Função Ranking
function Ranking(vitorias, derrotas){
    let rank = vitorias-derrotas;
    return rank;
}

//necessita prompt-sync para interagir com o usuário
const prompt = require('prompt-sync')();

//inicializando a variavel antes de utilizar
nomeUser = '';
while (nomeUser==''){
    nomeUser = prompt('Qual é o nome do seu herói? ');
    console.log();
    if (nomeUser !== '') {
        console.log('Olá, ' + nomeUser + '!!!');
        console.log();
        } else {
            console.log('O seu nome do herói precisa ser informado!!!');
            console.log();
            }
}
//inicializando a variavel antes de utilizar
vitorias=-1;
while (vitorias==-1){
    vitorias = prompt('Informe o seu número de vitórias: ');
    vitorias = parseFloat(vitorias);
    if (vitorias !== '' && !isNaN(vitorias) && vitorias >=0){
        console.log();
        }
    else {
        console.log('O número de vitórias precisa ser informado e pode ser igual a zero!!!');
        console.log();
        vitorias=-1;
    }
} 

//inicializando a variavel antes de utilizar
derrotas=-1;
while (derrotas==-1){
    derrotas = prompt('Informe o seu número de derrotas: ');
    derrotas = parseFloat(derrotas);
    if (derrotas !== '' && !isNaN(derrotas) && derrotas >=0){
        console.log();
        }
    else {
        console.log('O número de derrotas precisa ser informado e pode ser igual a zero!!!');
        console.log();
        derrotas=-1;
    }
} 

let saldo = Ranking(vitorias, derrotas);
nivelAtual="";
switch (true){
    case saldo<=10 :
        nivelAtual="Ferro";
        break;
    case saldo<=20 :
        nivelAtual="Bronze";
        break;
    case saldo<=50 :
        nivelAtual="Prata";
        break;
    case saldo<=80 :
        nivelAtual="Ouro";
        break;
    case saldo<=90 :
        nivelAtual="Diamante";
        break;
    case saldo<=100 :
        nivelAtual="Lendário";
        break;
    case saldo>=101 :
        nivelAtual="Imortal";
        break;
}
// Descobrindo o nível do herói. Vamos aguardar 10 segundos para criar um suspense
// Vamos aguardar 10 segundos para criar um suspense
  setTimeout(() => {
  console.log('Calculando o seu ranking... Aguarde...');
  console.log();
}, 2000);
 setTimeout(() => {
  console.log('Aguarde só mais um instante...');
  console.log();
  console.log();
}, 4000);
 setTimeout(() => {
  console.log("O herói tem saldo de " + saldo + " pontos e está no nível " + nivelAtual);
  console.log();
}, 6000);
