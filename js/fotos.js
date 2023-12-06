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
    a.href = 'leitura.html';
    a.appendChild(img);

    const divNomeLivro = document.createElement('div');
    divNomeLivro.classList.add('nome-livro');
    divNomeLivro.textContent = title.substring(0, 20); // Limita o título a 20 caracteres

    a.appendChild(divNomeLivro);
    bookDiv.appendChild(a);

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


async function loadImages(numImagesToLoad = 1) {
    const container = document.querySelector('.container-inside'); // Seleciona o container

    // Cria uma nova div com a classe "row"
    const divRow = document.createElement('div');
    divRow.classList.add('row');

    // Busca as chaves dos livros
    const bookKeys = await fetchBookKeys();
    const bookTitles = await fetchBookTitles();

    for (let i = 0; i < numImagesToLoad && bookKeysIndex < bookKeys.length; i++) {
        // Constrói a URL da imagem
        const url = buildImageUrl(bookKeys[bookKeysIndex]);

        // Carrega a imagem
        const img = fetchImage(url);

        // Cria um novo elemento de link
        const a = document.createElement('a');
        a.href = 'leitura.html';

        // Adiciona a imagem ao link
        a.appendChild(img);

        // Cria um novo elemento de div para a coluna
        const divCol = document.createElement('div');
        divCol.classList.add('div-livro', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-5');

        // Adiciona o link à div
        divCol.appendChild(a);

        
        divCol.addEventListener('click', localStorage.setItem('divUrl', url));

        // Cria uma nova div para o nome do livro
        const divNomeLivro = document.createElement('div');
        divNomeLivro.classList.add('nome-livro');
        divNomeLivro.textContent = bookTitles[bookKeysIndex]; // Adiciona o nome do livro à div

        // Adiciona a div do nome do livro ao link
        a.appendChild(divNomeLivro);

        // Adiciona a div à linha
        divRow.appendChild(divCol);

        // Incrementa o índice
        bookKeysIndex++;
    }
    // Adiciona a linha ao container
    container.appendChild(divRow);
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



