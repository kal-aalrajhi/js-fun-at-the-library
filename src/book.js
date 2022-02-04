function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };

  return character;
}

function saveReview(review, reviews){
  // Check for unique reviews
  var duplicate = false; // assume no duplicate
  var i = 0;

  // Iterate through array looking for duplicates
  for (var i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) duplicate = true;
  }
  // Append review to passed array only if there are no duplicates
  if (!duplicate) reviews.push(review);
}

function calculatePageCount(bookTitle) {
  // // Alternate way to do it and skip spaces, so we actaully only count letters
  // var letterCount = bookTitle.length
  // for (var i = 0; i < bookTitle.length; i++) {
  //   Avoid counting spaces as letters
  //   if (bookTitle[i] != " ") letterCount++;
  //   letterCount++;
  // }
  // return letterCount * 20;
  return bookTitle.length * 20;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
