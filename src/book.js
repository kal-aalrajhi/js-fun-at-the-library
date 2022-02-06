// Takes in a string and concatinates "The" before it.
function createTitle(title) {
  return "The " + title;
}

// Constructs a character object and returns that object
function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };

  return character;
}

// Add reviews to an array, but won't add duplicate reviews.
function saveReview(review, reviewsArr) {
  if (!reviewsArr.includes(review)) reviewsArr.push(review);
}

/*
  Alternate way to do saveReview function:
  -doesn't use .includes method
*/
// function saveReview(review, reviewsArr){
//   // Check if review unique
//   var duplicate = false; // assume no duplicate
//   var i = 0;
//
//   // Iterate through array looking for duplicates
//   for (var i = 0; i < reviewsArr.length; i++) {
//     if (review === reviewsArr[i]) duplicate = true;
//   }
//   // Append review to passed array only if there are no duplicates
//   if (!duplicate) reviewsArr.push(review);
// }

// counts the number of letters in title and multiplies it by 20
function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

/*
  Alternate way to do calculatePageCount function:
  - doesn't count spaces as a letter
*/
// function calculatePageCount(bookTitle) {
  // var letterCount = bookTitle.length
  // for (var i = 0; i < bookTitle.length; i++) {
  //   Avoid counting spaces as letters
  //   if (bookTitle[i] != " ") letterCount++;
  //   letterCount++;
  // }
  // return letterCount * 20;
// }

// creates and returns a book object
function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    genre: genre,
    // Invoke calculatePageCount function to get number of pages for book
    pageCount: calculatePageCount(title),
  };
  return book;
}

// Reduces the number of pages in a book by 1/4.
function editBook(book) {
  book.pageCount *= (0.75);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
