/*
OBJETIVO - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente

passo 1 - dar um jeito pegar o elemento HTML dos botões

passo 2 - dar um jeito de identificar o clique do usuario no botao

passo 3 - desmarcar o botão selecionado anterior 

passo 4 - marcar o botao clicado como se estivesse selecionado

passo 5 - esconder a imagem de fundo anterior

passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

//passo 1 - dar um jeito pegar o elemento HTML dos botões

const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem'); 
//passo 2 - dar um jeito de identificar o clique do usuario no botao

botoes.forEach( (item , indice) => {
    item.addEventListener('click', () => {
        //passo 3 - desmarcar o botão selecionado anterior 
        document.querySelector('.botao.selecionado').classList.remove('selecionado');
        //passo 4 - marcar o botao clicado como se estivesse selecionado
        item.classList.add('selecionado');
        //passo 5 - esconder a imagem de fundo anterior
        document.querySelector('.imagem.ativa').classList.remove('ativa');
        //passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    });
})