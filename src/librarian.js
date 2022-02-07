class Librarian {
  // (string, object)
  constructor(name, library) {
    this.name = name;
    this.library = library; // stores a library object
  }

  // Greet patron by name based on time of day
  greetPatron(patronName, isMorning) {
    if (isMorning) return `Good morning, ${patronName}!`;
    else return `Hello, ${patronName}!`;
  }

  // Find book bases off book title and check it out
  findBook(bookTitle) {
    // Store genre based shelf array - genre shelf is an array of strings
    var genreShelf = this.library.shelves['fantasy']; // how to make dynamic?
    // Check if book is on shelf
    for (var i = 0; i < genreShelf.length; i++) {
      if (genreShelf[i].title === bookTitle) {
        // Take book off shelf
        genreShelf.splice(i,1);
        return `Yes, we have ${bookTitle}`;
      }
    }
    // Book not found
    return `Sorry, we do not have ${bookTitle}`;
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * 0.25);
  }
}

module.exports = Librarian;
