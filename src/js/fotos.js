// Função para buscar livros e retornar as chaves
async function fetchBookKeys() {
    const response = await fetch('https://openlibrary.org/works/OL362694W.json');
    const data = await response.json();
    return data.covers;
}

// Função para construir a URL da imagem a partir da chave do livro
function buildImageUrl(bookKey) {
    return `https://covers.openlibrary.org/b/id/${bookKey}-L.jpg`;
}

let bookKeysIndex = 0;

// Função para carregar uma imagem
function fetchImage(url) {
    const div = document.createElement('div');
    div.classList.add('img-fluid'); // Adiciona a classe 'img-fluid' para responsividade
    div.style.backgroundImage = `url(${url})`;

    const img = new Image();

    img.onerror = function() {
        // A imagem não foi carregada, incrementa bookKeysIndex
        bookKeysIndex++;
    };
    img.src = url;

    return div;
}

// Função para carregar uma única imagem
async function loadImages(numImagesToLoad = 1) {
    const container = document.querySelector('.container-inside'); // Seleciona o container

    // Cria uma nova div com a classe "row"
    const divRow = document.createElement('div');
    divRow.classList.add('row');

    // Busca as chaves dos livros
    const bookKeys = await fetchBookKeys();

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
        divNomeLivro.textContent = 'Lorem Ipsum'; // Adiciona o nome do livro à div

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




// Função para verificar se o usuário rolou até o final da página
function checkScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // O usuário rolou até o final da página, carrega mais uma imagem
        loadImages(4);
    }
}


window.onload = function() {
    loadImages(16);
};

window.onscroll = checkScroll;

function mostrarmenu() {
    const boxAcessibilidade = document.getElementById('menu-acessibilidade');
    if (boxAcessibilidade.style.opacity == 0) {
        boxAcessibilidade.style.opacity = 1;
        boxAcessibilidade.style.visibility = 'visible';
    } else {
        boxAcessibilidade.style.opacity = 0;
        boxAcessibilidade.style.visibility = 'hidden';
    }
}
