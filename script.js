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

const deleteOverlay = document.querySelector(".deleteOverlay");
const deleteModal = document.querySelector("#deleteModal");
const deleteConfirm = document.querySelector("#confirmDelete");
const cancelDelete = document.querySelector("#cancelDelete");

const confirmDelete = () => {
  deleteOverlay.style.display = "block";
};

//close overlay when clicked
deleteOverlay.onclick = () => {
  deleteOverlay.style.display = "none";
};

cancelDelete.onclick = () => {
  deleteOverlay.style.display = "none";
};

deleteModal.onclick = (e) => {
  e.stopPropagation();
};

//Function to delete html and book from myLibrary array
const deleteBook = (currentCard) => {
  //updates visually
  currentCard.remove();
  //update array
  myLibrary = myLibrary.filter((book) => {
    return book.title !== currentCard.firstChild.firstChild.innerHTML;
  });
  deleteOverlay.style.display = "none";
};

let deletingCard = "";

//on confirm delete click, delete book
deleteConfirm.onclick = () => {
  deleteBook(deletingCard);
};

const changeReadStatus = (e) => {
  //updates visually
  const updateReadStatus =
    e.target.innerHTML === "Reading Completed"
      ? "Reading not Completed"
      : "Reading Completed";
  e.target.innerHTML = updateReadStatus;
  //update array
  const changedBook = myLibrary.findIndex(
    (book) => book.title == e.target.parentNode.firstChild.firstChild.innerHTML
  );
  let currentStatus;
  if (updateReadStatus === "Reading Completed") {
    currentStatus = "read";
    e.target.classList.remove("active");
  } else {
    currentStatus = "unread";
    e.target.classList.add("active");
  }
  myLibrary[changedBook].read = currentStatus;
};

//create each library card
const createLibraryCard = (book) => {
  const cards = document.getElementsByClassName("library-cards");
  const card = document.createElement("div");
  const bookInfo = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const cardDelete = document.createElement("button");
  const cardRead = document.createElement("button");

  card.classList.add("card");
  cardDelete.classList.add("card-delete");
  bookInfo.classList.add("card-bookInfo");
  cardRead.classList.add("cardRead-button");

  cardDelete.onclick = (e) => {
    deletingCard = e.target.parentNode;
    confirmDelete();
  };

  cardRead.onclick = (e) => {
    changeReadStatus(e);
  };

  cardDelete.innerHTML = "Delete";
  cardTitle.innerHTML = book.title;
  cardAuthor.innerHTML = book.author;
  cardPages.innerHTML = book.pages + " pages";
  if (book.read === "read") {
    cardRead.innerHTML = "Reading Completed";
    cardRead.classList.add("card-read");
  } else {
    cardRead.innerHTML = "Reading not Complete";
    cardRead.classList.add("card-read");
    cardRead.classList.add("active");
  }

  bookInfo.appendChild(cardTitle);
  bookInfo.appendChild(cardAuthor);
  bookInfo.appendChild(cardPages);

  card.appendChild(bookInfo);
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

  if (
    formTitle.value !== "" &&
    formAuthor.value !== "" &&
    formPages.value !== ""
  ) {
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
  }
  if (formTitle.value === "") {
    formTitle.classList.add("active");
  } else {
    formTitle.classList.remove("active");
  }
  if (formAuthor.value === "") {
    formAuthor.classList.add("active");
  } else {
    formTitle.classList.remove("active");
  }
  if (formPages.value === "") {
    formPages.classList.add("active");
  } else {
    formPages.classList.remove("active");
  }
};

//forEach to create a library card for each book in myLibrary array
myLibrary.forEach(createLibraryCard);

//add deletion confirmation (overlay)
//add about overlay
//style everything else
//prevent repeated book?
