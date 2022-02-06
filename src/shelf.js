// Shelves books as long as shelf isn't full
function shelfBook(book, shelf, capacity=3) {
  // Check if array is at capacity
  if (shelf.length < capacity) shelf.unshift(book);
}

// Unshelves available books
function unshelfBook(bookToRemove, shelf)
{
  // Loop through shelf to see if book is available for removal
  for (var i = 0; i < shelf.length; i++) {
    if (bookToRemove === shelf[i].title) shelf.splice(i, 1);
  }
}

// Returns a list of titles on the shelf
function listTitles(shelf) {
  // Create an empty array to populate with list of book titles
  var bookTitles = [];
  for (var i = 0; i < shelf.length; i++) {
    // Add book titles to array
    bookTitles.push(shelf[i].title);
  }
  // Concatonate all title elements and seperate them by a comma
  return bookTitles.join(', ');
}

// Returns a boolean value based on whether or not the book is on the shelf
function searchShelf(shelf, bookTitle) {
  isBookOnShelf = false;
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) isBookOnShelf = true;
  }
  return isBookOnShelf;
}

/*
  Alternate way to create searchShelf function:
  - use .include() method
*/
// function searchShelf(shelf, bookTitle) {
//   bookTitlesOnShelf = [];
//   for (var i = 0; i < shelf.length; i++) {
//     bookTitlesOnShelf.push(shelf[i].title);
//   }
//   return bookTitlesOnShelf.includes(bookTitle);
// }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
