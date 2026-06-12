let corSelecionada = "#22c55e";

document.querySelectorAll(".cor").forEach(cor => {

    cor.addEventListener("click", () => {

        corSelecionada = cor.dataset.cor;

    });

});

function mostrarMensagem(texto,classe){

    const msg = document.getElementById("mensagem");

    msg.textContent = texto;
    msg.className = classe;
    msg.style.opacity = "1";

    setTimeout(() => {
        msg.style.opacity = "0";
    },2000);

}

function verificar(botao,resposta,correta){

    botao.style.backgroundColor = corSelecionada;

    if(resposta === correta){

        botao.style.border = "3px solid green";

        mostrarMensagem(
            "🎉 Parabéns! Você acertou!",
            "acerto"
        );

    }else{

        botao.style.border = "3px solid red";

        mostrarMensagem(
            "😢 Ops! Tente novamente!",
            "erro"
        );

    }

}

document.getElementById("reiniciar").addEventListener("click",()=>{

    location.reload();

});