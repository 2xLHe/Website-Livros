window.onload = function() {
    const livroDetalhes = localStorage.getItem('livroDetalhes');
    if (livroDetalhes) {
        const { title, thumbnail} = JSON.parse(livroDetalhes);
        console.log(title);

        // Use as informações como necessário para exibi-las na página
        document.getElementById('nomeLivro').innerHTML = title;
        var foto = document.getElementById('item-venda');
        foto.src = thumbnail;

        // Limpa os detalhes salvos
        localStorage.removeItem('livroDetalhes');
    }

    carregarTexto('txt/sinopse.txt', 'sinopse-texto');
};


function carregarTexto(arquivoTexto, idDiv) {
    // Elemento div onde você deseja exibir o conteúdo
    const divConteudo = document.getElementById(idDiv);
    divConteudo.style.color = "var(--texto-color)";

    // Realiza a requisição para o arquivo de texto
    fetch(arquivoTexto)
        .then(response => response.text())
        .then(texto => {
            // Substitui as quebras de linha por <br>
            const textoComQuebrasDeLinha = texto.replace(/\n/g, '<br>');

            // Adiciona o conteúdo do arquivo à div
            divConteudo.innerHTML = textoComQuebrasDeLinha;
        })
        .catch(error => console.error('Erro na requisição:', error));
}
