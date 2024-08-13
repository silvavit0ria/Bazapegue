
document.getElementById('busca').addEventListener('input',function(){
    const filtro = this.value.toLowerCase();
    const items = document.querySelectorAll('#imagem .item');

    items.forEach(item =>{
        const text = item.querySelector('img').alt.toLowerCase();
        item.style.display=text.includes(filtro)?'':'none';
    }); //filtrando os items 
});
let botaocomprar = document.querySelectorAll('.adicionarcarrinho');

botaocomprar.forEach(function(botao){   // Itera sobre cada botão e adiciona um event listener
    botao.addEventListener('click',function(){
        alert("Adicionou no carrinho")
    });
});
