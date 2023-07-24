let myLibrary = [];

//set book object
class Book {
  constructor(title, author, pages, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }
}

//book function
Book.prototype.info = function () {
  console.log(
    `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  );
};

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "read");
const harryPotter = new Book("Harry Potter", "J.R.R Tolkien", "295", "read");

// theHobbit.info();

myLibrary.push(theHobbit);
myLibrary.push(harryPotter);

class addBookToLibrary {
  constructor(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    // myLibrary.push(title);
  }
}

//create each library card
const createLibraryCard = (book) => {
  console.log(book);
  const cards = document.getElementsByClassName("library-cards");
  const card = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardDelete = document.createElement("button");

  card.classList.add("card");
  cardDelete.classList.add("card-delete");

  cardDelete.innerHTML = "Delete";
  cardTitle.innerHTML = book.title;

  card.appendChild(cardDelete);
  card.appendChild(cardTitle);
  cards[0].appendChild(card);
};

//forEach to create a library card for each book in myLibrary array
myLibrary.forEach(createLibraryCard);
