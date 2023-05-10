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

var table = document.getElementById("myLibrary");

var row = table.insertRow();

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

cell1.outerHTML = "<th>NEW CELL1</th>";
cell2.textContent = "NEW CELL2";
cell3.textContent = "NEW CELL3";
cell4.textContent = "NEW CELL4";

const book1 = new Book("Spongebob Squarepants", "ME MARIO", "120", false);
const book2 = new Book("Spongebob Squarepants2", "ME MARIO", "120", false);
const book3 = new Book("Spongebob Squarepants3", "ME MARIO", "120", false);

console.log(book1.info());
