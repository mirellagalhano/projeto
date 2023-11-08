function validarForm() {
    // Recupere os valores dos campos
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    // Recupere outros campos da mesma forma...

    // Realize as validações
    if (nome.length < 15 || nome.length > 60) {
        alert("O nome deve ter entre 15 e 60 caracteres.");
        return false;
    }

    // Valide outros campos aqui de acordo com as regras mencionadas

    // Verifique se as senhas coincidem
    var senha = document.getElementById("senha").value;
    var confirmaSenha = document.getElementById("confirmaSenha").value;

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem.");
        return false;
    }

    // Se todas as validações passarem, o formulário será enviado
    return true;
}
function mostrarMensagem(mensagem, tipo) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = mensagem;
    mensagemDiv.classList.remove("hidden");
    mensagemDiv.classList.add(tipo);

    // Esconda a mensagem após 3 segundos
    setTimeout(function() {
        mensagemDiv.classList.add("hidden");
        mensagemDiv.classList.remove(tipo);
        mensagemDiv.innerHTML = "";
    }, 3000);
}

function validarForm() {
    // Validações do formulário

    if (todasAsValidacoesPassaram) {
        // Armazene o login no localStorage
        var login = document.getElementById("login").value;
        localStorage.setItem("login", login);

        // Redirecione para Tela 2 (Tela de Login)
        window.location.href = "tela2.html";
        return false; // Evite o envio do formulário
    }

    return false;
}
