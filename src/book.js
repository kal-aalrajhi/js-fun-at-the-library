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

// test for saveReview
var reviews = ["Garbage!", "Good stuff.", "An astounding success", "Nope."];
saveReview("An astounding success", reviews);
console.log(reviews);

// while (!duplicate) {
//   if (review === reviews[i]) {
//     console.log("DUPLICATE!");
//     duplicate = true;
//   }
//   // Go to next review
//   i++;
// }

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
