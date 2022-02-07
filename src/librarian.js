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

  // Find book bases off book title
  findBook(bookTitle) {
    // Store genre based shelf array
    var genreShelf = this.library.shelves['fantasy']; // make dynamic
    // Check if book is on shelf
    for (var i = 0; i < genreShelf.length; i++) {
      if (genreShelf[i].title === bookTitle) return `Yes, we have ${bookTitle}`;
    }
    // Book not found
    return `Sorry, we do not have ${bookTitle}`;
  }

  //
}


module.exports = Librarian;
