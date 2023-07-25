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

//preset books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "read");
const harryPotter = new Book("Harry Potter", "J.R.R Tolkien", "295", "read");

// theHobbit.info();

myLibrary.push(theHobbit);
myLibrary.push(harryPotter);

class addBookToLibrary {
  constructor(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
  }
}

//Function to delete html and book from myLibrary array
const deleteBook = (e) => {
  e.target.parentNode.remove();
  myLibrary = myLibrary.filter((book) => {
    return book.title !== e.target.parentNode.firstChild.innerHTML;
  });
};

const changeReadStatus = (e) => {
  const updateReadStatus = e.target.innerHTML === "read" ? "unread" : "read";
  e.target.innerHTML = updateReadStatus;
};

//create each library card
const createLibraryCard = (book) => {
  const cards = document.getElementsByClassName("library-cards");
  const card = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardDelete = document.createElement("button");
  const cardRead = document.createElement("button");

  card.classList.add("card");
  cardDelete.classList.add("card-delete");
  cardRead.classList.add("card-read");

  cardDelete.onclick = (e) => {
    deleteBook(e);
  };

  cardRead.onclick = (e) => {
    changeReadStatus(e);
  };

  cardDelete.innerHTML = "Delete";
  cardTitle.innerHTML =
    book.title + "</br>" + book.author + "</br>" + book.pages;
  cardRead.innerHTML = book.read;

  card.appendChild(cardTitle);
  card.appendChild(cardRead);
  card.appendChild(cardDelete);
  cards[0].appendChild(card);
};

//Onclick for add button
const addBookBtn = document.querySelector(".library-button button");
const overlay = document.querySelector(".overlay");
const addBookModal = document.getElementById("addBookModal");

// when user call the modal
addBookBtn.onclick = () => {
  overlay.style.display = "block";
};
// when user close modal
overlay.onclick = () => {
  overlay.style.display = "none";
};

//prevent modal from closing when user click on it
addBookModal.onclick = (e) => {
  e.stopPropagation();
};

//get book input
const addBookForm = document.getElementById("addBookForm");
const submitBook = document.getElementById("submitBook");
const formTitle = document.getElementById("title");
const formAuthor = document.getElementById("author");
const formPages = document.getElementById("pages");
const formRead = document.getElementById("read");
submitBook.onclick = (e) => {
  e.preventDefault();

  const readStatus = formRead.checked ? "read" : "unread";

  const newBook = new Book(
    formTitle.value,
    formAuthor.value,
    formPages.value,
    readStatus
  );

  myLibrary.push(newBook);
  createLibraryCard(newBook);
  overlay.style.display = "none";
  addBookForm.reset();
};

//forEach to create a library card for each book in myLibrary array
myLibrary.forEach(createLibraryCard);

//add deletion confirmation (overlay)
//add about overlay
//style everything else
//prevent repeated book?
//change read status (add a function to the class?)
