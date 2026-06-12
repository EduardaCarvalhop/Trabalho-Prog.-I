document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", (event) => {

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if(nome.length < 3){
            alert("Digite um nome válido (mínimo 3 letras).");
            event.preventDefault();
            return;
        }

       if(!email.includes("@") || !email.includes(".")){ 
            alert("E-mail inválido.");
            event.preventDefault(); 
            return;
        }

        if(mensagem.length < 10){
            alert("A mensagem deve ter pelo menos 10 caracteres.");
            event.preventDefault();
            return;
        }

        alert("Formulário validado com sucesso!");
        event.preventDefault();
    });

});