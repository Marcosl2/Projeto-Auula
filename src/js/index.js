/** 1- pegar o elemento HTML da srta avançar;
 *  2- identificar o clique do usuario na seta avançar;
 *  3- fazer aparecer o proximo cartão da lista;
 *  4- buscar o cartao ue esta selecionado.
 * 
 * Função para pegar a seta
 * 
 * 
 */

const btnAvancar = (document.getElementById('btn-avancar'));
const btnVoltar = (document.getElementById('btn-voltar'));
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

btnAvancar.addEventListener('click', function () {

    if (cartaoAtual === cartoes.length - 1) return;

    escondercartaoSelecionado();

    cartaoAtual++;
    mostarCartao();


});

/** 1- pegar o elemento HTML da srta avançar;
 *  2- identificar o clique do usuario na seta avançar;
 *  3- fazer aparecer o proximo cartão da lista;
 *  4- buscar o cartao ue esta selecionado.
 * 
 * Função para pegar seta de voltar
 * 
 * 
 */

btnVoltar.addEventListener('click', function () {

    if (cartaoAtual === 0) return; 
   
    escondercartaoSelecionado();
    
    cartaoAtual--;
    mostarCartao();


});

function mostarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function escondercartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

