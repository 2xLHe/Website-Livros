apiKey = 'AIzaSyCO9Po4tTy-4AgDa3eN3p3AHGKSqChefl0';

function fetchBooks(searchTerms, apiKey) {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=${apiKey}`)
        .then(response => response.json())
        .then(result => result.items);
}