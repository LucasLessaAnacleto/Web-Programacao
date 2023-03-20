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
let indice = 0;
const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem'); 
let intervaloImagem = setInterval(proximaImagem,5000);

//passo 2 - dar um jeito de identificar o clique do usuario no botao

botoes.forEach( (item , i) => {
    item.addEventListener('click', () => {
        //passo 3 - desmarcar o botão selecionado anterior 
        document.querySelector('.botao.selecionado').classList.remove('selecionado');
        //passo 4 - marcar o botao clicado como se estivesse selecionado
        item.classList.add('selecionado');
        //passo 5 - esconder a imagem de fundo anterior
        document.querySelector('.imagem.ativa').classList.remove('ativa');
        //passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[i].classList.add('ativa');
        indice = i;
        resetIntervalo();
    });
}) 

function proximaImagem(){
    if (indice != botoes.length-1){
        indice++;
    }else{
        indice = 0;
    }
    document.querySelector('.botao.selecionado').classList.remove('selecionado');   
    botoes[indice].classList.add('selecionado');
    document.querySelector('.imagem.ativa').classList.remove('ativa');    
    imagens[indice].classList.add('ativa');
}  

function resetIntervalo(){
    clearInterval(intervaloImagem);
    intervaloImagem = setInterval(proximaImagem,5000);
}




