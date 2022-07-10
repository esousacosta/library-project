'use strict'
class Library {
    constructor () {
        this.books = [];
    }
    
    addBook(iBook) {
        this.books.push(iBook);
    }
    
    removeBookById(iBookId) {
        const aBookToRemoveIndex = this.books.findIndex(aBook => aBook.id === iBookId.id);
        this.books.splice(aBookToRemoveIndex, 1);
    }
    
}

class Book {
    static bookId = 0;
    constructor(iTitle, iAuthor, iPages) {
        this.title = iTitle;
        this.author = iAuthor;
        this.pages = iPages;
        this.id = Book.bookId++;
        this.read = false;
    }
}

function toggleBookCardReadUnreadButton(oBook){
    this.classList.toggle("read-button");
    this.textContent = this.textContent === "Read" ? "Unread" : "Read";
    oBook.read = !oBook.read;
}

function displayBookOnScreen(iBook, ioLibrary)
{
    let aMainSectionDiv = document.querySelector(".main-section");
    const aNewBookCardDiv = document.createElement("div");
    const aNewBookCardTitleDiv = document.createElement("div");
    const aNewBookCardAuthorDiv = document.createElement("div");
    const aNewBookCardPagesCountDiv = document.createElement("div");
    const aNewBookCardReadButton = createNewBookCardButton();
    aNewBookCardReadButton.classList.add("read-btn");
    aNewBookCardReadButton.addEventListener("click", toggleBookCardReadUnreadButton.bind(aNewBookCardReadButton, iBook));
    const aNewBookCardRemoveButton = createNewBookCardButton("Remove");
    aNewBookCardRemoveButton.classList.add("remove-btn");

    // Set classes for each div
    aNewBookCardDiv.classList.add("book-card");
    aNewBookCardTitleDiv.classList.add("book-title");
    aNewBookCardAuthorDiv.classList.add("book-author");
    aNewBookCardPagesCountDiv.classList.add("pages-count");

    // Set text content for each div
    aNewBookCardDiv.setAttribute("id", "div-" + iBook.id);
    aNewBookCardTitleDiv.textContent = iBook.title;
    aNewBookCardAuthorDiv.textContent = iBook.author;
    aNewBookCardPagesCountDiv.textContent = iBook.pages + " pages";

    // Set the children of the main book card div
    aNewBookCardDiv.appendChild(aNewBookCardTitleDiv);
    aNewBookCardDiv.appendChild(aNewBookCardAuthorDiv);
    aNewBookCardDiv.appendChild(aNewBookCardPagesCountDiv);
    aNewBookCardDiv.appendChild(aNewBookCardReadButton);
    aNewBookCardDiv.appendChild(aNewBookCardRemoveButton);
    
    const aLastBookCardDivInPage = aMainSectionDiv.lastElementChild;
    aMainSectionDiv.insertBefore(aNewBookCardDiv, aLastBookCardDivInPage);

    aNewBookCardRemoveButton.addEventListener("click", () => {
        ioLibrary.removeBookById(iBook.id);
        aNewBookCardDiv.remove()});
    
    const aAddButton = document.querySelector("#add-book-btn");
    addBookCardToScreen.call(aAddButton);
}

function createNewBookCardButton(iText = "Read", iType = "button")
{
    const aNewBookCardButton = document.createElement("button");
    aNewBookCardButton.type = iType;
    aNewBookCardButton.textContent = iText;
    return aNewBookCardButton;
}

function addBookCardToScreen()
{
    this.classList.toggle("twist-plus-sign");
    const aAddBookFormDiv = document.querySelector(".add-book-form");
    aAddBookFormDiv.classList.toggle("add-book-form-show");
}

function addBookToLibrary(ioLibrary)
{
    const aFormTitleInput = this.querySelector("#title-form-id");
    const aFormAuthorInput = this.querySelector("#author-form-id");
    const aFormPagesInput = this.querySelector("#pages-form-id");

    const aNewInputBook = new Book(aFormTitleInput.value, aFormAuthorInput.value, aFormPagesInput.value);
    ioLibrary.addBook(aNewInputBook);
    aFormAuthorInput.value = "";
    aFormTitleInput.value = "";
    aFormPagesInput.value = "";
    displayBookOnScreen(aNewInputBook, ioLibrary);
}

let aLibrary = new Library();

const aAddButton = document.querySelector("#add-book-btn");
const aPopUpFormDiv = document.querySelector(".add-book-form");
const aPopUpFormSubmitButton = aPopUpFormDiv.querySelector(".form-submit-btn");
aAddButton.addEventListener("click", addBookCardToScreen.bind(aAddButton));
aPopUpFormSubmitButton.addEventListener("click", addBookToLibrary.bind(aPopUpFormDiv, aLibrary));

