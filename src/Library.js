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

// function checkoutBook(library, bookTitle, genre) {
//   // navigate to genre array
//   console.log(library.shelves[])
//
// }
//
//
// var dracula = {
//   title: "Dracula",
//   mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
//   pageCount: 418,
//   genre: "fantasy"
// }
// var bornACrime = {
//   title: "Born a Crime",
//   mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
//   pageCount: 304,
//   genre: "nonFiction"
// }
// var prideAndPrejudice = {
//   title: "Pride and Prejudice",
//   mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
//   pageCount: 432,
//   genre: "fiction"
// }
// var denverLibrary = createLibrary("Denver Public Library");
//
// addBook(denverLibrary, dracula);
// addBook(denverLibrary, bornACrime);
// addBook(denverLibrary, prideAndPrejudice);
//
// var result1 = checkoutBook(denverLibrary, "Pride and Prejudice", "fiction");

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
