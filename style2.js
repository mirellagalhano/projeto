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

function validarLogin() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    // Aqui você deve adicionar a lógica de validação do login e senha
    // Por exemplo, verificar se o login e senha correspondem a um usuário válido

    if (loginEhValido && senhaEhValida) {
        // Armazene o login no localStorage
        localStorage.setItem("login", login);

        // Redirecione para Tela 3 (Tela Principal do Sistema)
        window.location.href = "tela3.html";
        return false; // Evite o envio do formulário
    } else {
        mostrarMensagem("Login ou senha inválidos.", "error");
    }

    return false;
}

function redirecionarParaCadastro() {
    // Redirecione para a Tela 1 (Cadastro de Novo Usuário)
    window.location.href = "tela1.html";
}
