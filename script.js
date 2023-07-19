let myLibrary = [];

function Book(title, author, pages, read ) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        console.log(`${title} by ${author}, ${pages} pages, ${read}`) 
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'read');

theHobbit.info()

function addBookToLibrary() {
  // do stuff here
}
