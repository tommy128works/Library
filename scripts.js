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

function displayLibrary(library) {
  var table = document.getElementById("myLibrary");
  var numRows = document.getElementById("myLibrary").rows.length;
  for (let i = 0; i < numRows - 1; i++) {
    table.deleteRow(1);
  }

  for (let i = 0; i < library.length; i++) {
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.outerHTML = `<th>${i + 1}</th>`;
    cell2.textContent = library[i].title;
    cell3.textContent = library[i].author;
    cell4.textContent = library[i].pages;
    cell5.textContent = library[i].read;
    cell6.textContent = library[i].read;
  }
}

const book1 = new Book("Spongebob Squarepants", "ME MARIO", "120", false);
const book2 = new Book("Spongebob Squarepants2", "ME MARIO", "120", false);
const book3 = new Book("Spongebob Squarepants3", "ME MARIO", "120", false);

addBookToLibrary(myLibrary, book1);
addBookToLibrary(myLibrary, book2);
addBookToLibrary(myLibrary, book3);

displayLibrary(myLibrary);
