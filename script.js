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

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  // myLibrary.push(title);
  // console.log(myLibrary)
}
