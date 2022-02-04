function createLibrary(name) {
  // return library object
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

function addBook(library, book) {
  library.shelves[book.genre].push(book); // must use bracket notation to make it dynamic
}

function checkoutBook(library, bookTitle, genre) {
  // navigate to respective genre shelf and check for book title
  var shelf = library.shelves[genre] // array of books
  // iterate over array of book objects to find if book title is in array
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      // remove book from shelf
      shelf.splice(i,1); // user array method splice to remove only 1 item at the ith index
      // let user know they have successfully check out the book
      return `You have now checked out ${bookTitle} from the ${library.name}`;
    }
  }
  // loop did not find book, let user know
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
