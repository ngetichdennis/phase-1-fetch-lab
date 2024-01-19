function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // Use the fetch API to make a GET request to the API endpoint
  return fetch('https://anapioficeandfire.com/api/books')
    .then(function(response) {
      // Check if the response is ok
      if (response.ok) {
        // Return the response as JSON
        return response.json();
      } else {
        // Throw an error
        throw new Error('Something went wrong');
      }
    })
    .then(function(books) {
      // Call the renderBooks function with the books data
      renderBooks(books);
    })
    .catch(function(error) {
      // Log the error to the console
      console.error(error);
    });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
