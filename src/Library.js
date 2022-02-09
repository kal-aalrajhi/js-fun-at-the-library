// Creates and populates library object
function createLibrary(name) {
  return {
    name: name,
    // Create shelves property which has an object value of shelf parameters containing book arrays
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
}

// Add book to library genre specific shelf
function addBook(library, book) {
  // Use bracket notation, instead of dot notation, to access shelves dynamically
  library.shelves[book.genre].push(book);
}

// Checkout book
function checkoutBook(library, bookTitle, genre) {
  // Array of book objects on genre specific shelf
  var shelf = library.shelves[genre];
  // Iterate over shelf titles to find if book title is available for checkout
  for (var i = 0; i < shelf.length; i++) {
    // Book is available
    if (shelf[i].title === bookTitle) {
      // Remove one book from shelf (the current book object (i))
      shelf.splice(i,1);
      // Let user know they have successfully check out the book
      return `You have now checked out ${bookTitle} from the ${library.name}`;
    }
  }
  // Loop did not find book, let user know
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
