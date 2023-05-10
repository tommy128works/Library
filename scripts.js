let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (read === true) {
      return title + " by " + author + ", " + pages + " pages, read already";
    } else {
      return title + " by " + author + ", " + pages + " pages, not read yet";
    }
  };
}

function addBookToLibrary(library, book) {
  library.push(book);
}

const book1 = new Book("Spongebob Squarepants", "ME MARIO", "120", false);

console.log(book1.info());
