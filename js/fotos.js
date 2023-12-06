window.onload = function() {
    var apiKey = 'AIzaSyCO9Po4tTy-4AgDa3eN3p3AHGKSqChefl0'

    fetch(`https://www.googleapis.com/books/v1/volumes?q=usp+isbn&filter=free-ebooks&key=${apiKey}`)
    .then(response => response.json())
    .then(result => {
        console.log(result.items); // Imprime os itens no console
    })
}

