function fetchBooks() {
    var apiKey = 'AIzaSyCO9Po4tTy-4AgDa3eN3p3AHGKSqChefl0';

    return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn&filter=free-ebooks&key=${apiKey}`)
        .then(response => response.json())
        .then(result => result.items);
}

function createBookElement(title, thumbnail) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('div-livro', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-2');

    const img = document.createElement('img');
    img.src = thumbnail;
    img.classList.add('img-fluid');

    const a = document.createElement('a');
    a.href = 'carrinho.html';
    a.appendChild(img);

    const divNomeLivro = document.createElement('div');
    divNomeLivro.classList.add('nome-livro');
    divNomeLivro.textContent = title.substring(0, 20); // Limita o título a 20 caracteres

    a.appendChild(divNomeLivro);
    bookDiv.appendChild(a);

    bookDiv.addEventListener('click', function() {
        localStorage.setItem('livroDetalhes', JSON.stringify({ title, thumbnail}));
    }); 

    return bookDiv;
}

async function printbooks(numBooksToLoad = 20) {
    const container = document.querySelector('.container-inside');
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    const books = await fetchBooks();

    for (let i = 0; i < numBooksToLoad && i < books.length; i++) {
        const { title, imageLinks: { thumbnail } = {} } = books[i].volumeInfo;
        const bookElement = createBookElement(title, thumbnail);
        row.appendChild(bookElement);

        bookElement.addEventListener('click', function() {
            localStorage.setItem('divUrl', thumbnail);
        });
    }
}


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



window.onload = function() {
    const livroDetalhes = localStorage.getItem('livroDetalhes');
    if (livroDetalhes) {
        const { title, thumbnail, synopsis } = JSON.parse(livroDetalhes);

        // Use as informações como necessário para exibi-las na página
        document.getElementById('detalhes-titulo').textContent = title;
        document.getElementById('detalhes-imagem').src = thumbnail;
        document.getElementById('detalhes-sinopse').textContent = synopsis;

        // Limpa os detalhes salvos
        localStorage.removeItem('livroDetalhes');
    }
};


