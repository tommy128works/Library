let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    if (isRead === true) {
      return title + " by " + author + ", " + pages + " pages, read already";
    } else {
      return title + " by " + author + ", " + pages + " pages, not read yet";
    }
  };
}

function addBookToLibrary(library, book) {
  library.push(book);
}

function updateRead(book, btn) {
  if (book.isRead === true) {
    btn.textContent = "Read";
  } else {
    btn.textContent = "Not read";
  }
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
    cell5.outerHTML = `<td><button data-num="${i}" class="status-btn"></button></td>`;
    cell6.outerHTML = `<td><button data-num="${i}" class="remove-btn">Remove</button></td>`;
  }

  var btns = document.querySelectorAll(".remove-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      library.splice(event.target.getAttribute("data-num"), 1);
      displayLibrary(library);
    });
  });

  var btns = document.querySelectorAll(".status-btn");
  btns.forEach((btn) => {
    updateRead(library[btn.getAttribute("data-num")], btn);
    btn.addEventListener("click", (event) => {
      var index = event.target.getAttribute("data-num");
      library[index].isRead = !library[index].isRead;
      updateRead(library[index], btn);
      displayLibrary(myLibrary);
    });
  });
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  var allInputs = document.querySelectorAll("input");
  allInputs.forEach((singleInput) => (singleInput.value = ""));
}

function submitForm() {
  var title = document.getElementById("title");
  var author = document.getElementById("author");
  var pages = document.getElementById("pages");
  var isRead = document.getElementById("isRead");

  var book = new Book(title.value, author.value, pages.value, isRead.checked);
  addBookToLibrary(myLibrary, book);

  closeForm();
  displayLibrary(myLibrary);
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const book1 = new Book("Spongebob Squarepants", "ME MARIO", "120", false);
const book2 = new Book("Spongebob Squarepants2", "ME MARIO", "120", false);
const book3 = new Book("Spongebob Squarepants3", "ME MARIO", "120", true);

addBookToLibrary(myLibrary, book1);
addBookToLibrary(myLibrary, book2);
addBookToLibrary(myLibrary, book3);

displayLibrary(myLibrary);
