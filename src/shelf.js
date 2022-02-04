function shelfBook(book, shelf, capacity=3) {
  // Check if array is at capacity, if not then add book to beginning of shelf array
  if (shelf.length < capacity) shelf.unshift(book);
}

function unshelfBook(bookToRemove, shelf)
{
  for (var i = 0; i < shelf.length; i++) {
    if (bookToRemove === shelf[i].title) shelf.splice(i, 1);
  }
}

function listTitles(shelf) {
  var bookList = "";
  // var shelfLength = shelf.length;
  for (var i = 0; i < shelf.length - 1; i++) {
    bookList += shelf[i].title + ", ";
  }
  bookList += shelf[shelf.length-1].title;
  return bookList;
}

function searchShelf(shelf, bookTitle) {
  isBookOnShelf = false;
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) isBookOnShelf = true;
  }
  return isBookOnShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
