let myLibrary = [];

//set book object
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

//book function
Book.prototype.info = function () {
  console.log(
    `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  );
};

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "read");

theHobbit.info();

myLibrary.push(theHobbit);

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  // myLibrary.push(title);
  console.log(myLibrary);
}

//check whether there are any book input
//maybe change this into a function so it can run whenever a book is added and stuff
if (myLibrary.length === 0) {
  console.log("empty library");
  console.log(myLibrary.length);
}

if (myLibrary.length != 0) {
  console.log("library");
}
