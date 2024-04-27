const myLibrary = [];
const booksGrid = document.getElementById("booksGrid");
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector("#addBookBtn");
const cancelBtn = document.getElementById('cancel')
const submitBtn = document.getElementById('submit')
addBtn.addEventListener('click', function(){
    dialog.showModal();
    console.log('dialog opened')
})
cancelBtn.addEventListener('click',function(){
    dialog.close();
    console.log('closed')
})



function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead) {
  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
  createBookCard(newBook);
  
}

addBookToLibrary("Harry Potter", "Jk Rowling", 1000, false);

addBookToLibrary("Harry Potter", "Jk Rowling", 1000, false);

function createBookCard(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const buttonGroup = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");
  bookCard.classList.add("book-card");
  buttonGroup.classList.add("button-group");

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = "Remove";
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonGroup.appendChild(readBtn);
  buttonGroup.appendChild(removeBtn);
  bookCard.appendChild(buttonGroup);
  booksGrid.appendChild(bookCard);
}

function clearBooksGrid() {
  booksGrid.innerHTML = "";
}
submitBtn.addEventListener('click', function(){
    event.preventDefault();
    let booktitle = document.getElementById('bookTitle').value
    let author = document.getElementById('authorInput').value
    let pages = document.getElementById('pagesInput').value
    
    console.log(booktitle   )
    dialog.close();
})