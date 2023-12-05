const container = document.querySelector('.menuInfo');
async function carregarDoStorage(){
    let url = localStorage.getItem('divUrl');
    console.log(url);


    const a = document.createElement('a');

    // Cria um novo elemento de imagem
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('img-fluid-2');

    a.appendChild(img);

    // Cria um novo elemento de div para a coluna
    const divCol = document.createElement('div');
    divCol.classList.add('div-livro', 'col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-5');

    // Adiciona o link à div
    divCol.appendChild(a);

    // Adiciona a div à div .capa-livro
    container.appendChild(divCol);
}

async function carregarSumario(){
    const divMae = document.createElement('div');
    divMae.classList.add('div-12', 'div-sm-6', 'div-md-4', 'div-lg-3', 'div-xl-5','divMae');
    const divTexto = document.createElement('div');
    divTexto.classList.add('div-12', 'div-sm-6', 'div-md-4', 'div-lg-3', 'div-xl-5','sumario');

    divTexto.textContent = "Seu texto aqui";

    divMae.appendChild(divTexto);

    container.appendChild(divMae);
}

carregarDoStorage();
carregarSumario();