// Você pode usar JavaScript para adicionar interatividade ao menu, como exibir conteúdo quando um link é clicado.

document.addEventListener("DOMContentLoaded", function () {
    // Capture todos os links de submenu
    var subMenuLinks = document.querySelectorAll("#menu ul ul a");

    // Adicione um evento de clique a cada link de submenu
    subMenuLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evite a navegação padrão

            // Carregue o conteúdo do tópico selecionado no elemento "conteudo"
            var topicName = this.textContent;
            carregarConteudo(topicName);
        });
    });
});

function carregarConteudo(topicName) {
    // Aqui você pode adicionar lógica para carregar o conteúdo do tópico selecionado.
    // Isso pode envolver a busca de informações do tópico em um banco de dados ou
    // a exibição de um conteúdo pré-existente.

    var conteudoDiv = document.getElementById("conteudo");
    conteudoDiv.innerHTML = "<h2>" + topicName + "</h2><p>Conteúdo do tópico " + topicName + "</p>";
}
