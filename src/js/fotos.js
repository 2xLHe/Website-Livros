window.onload = function() {
    var apiKey = 'AIzaSyCO9Po4tTy-4AgDa3eN3p3AHGKSqChefl0'

    fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${apiKey}`)
    .then(response => response.json())
    .then(result => {
        console.log(result.items); // Imprime os itens no console
    })
}

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
