'use strict'
class Library {
    constructor () {
        this.books = [];
    }
    
    addBook(iBook) {
        this.books.push(iBook);
    }
}

class Book {
    static bookId = 0;
    constructor(iTitle, iAuthor) {
        this.title = iTitle;
        this.author = iAuthor;
        this.id = bookId++;
        this.read = false;
    }
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
    this.textContent = this.textContent === "+" ? "X" : "+";
    const aAddBookFormDiv = document.querySelector(".add-book-form");
    aAddBookFormDiv.classList.toggle("add-book-form-show");
    
    // let aMainSectionDiv = document.querySelector(".main-section");
    // const aNewBookCardDiv = document.createElement("div");
    // const aNewBookCardTitleDiv = document.createElement("div");
    // const aNewBookCardAuthorDiv = document.createElement("div");
    // const aNewBookCardPagesCountDiv = document.createElement("div");
    // const aNewBookCardReadButton = createNewBookCardButton();
    // aNewBookCardReadButton.classList.add("read-btn");
    // const aNewBookCardRemoveButton = createNewBookCardButton("Remove");
    // aNewBookCardRemoveButton.classList.add("remove-btn");
    
    // // Set classes for each div
    // aNewBookCardDiv.classList.add("book-card");
    // aNewBookCardTitleDiv.classList.add("book-title");
    // aNewBookCardAuthorDiv.classList.add("book-author");
    // aNewBookCardPagesCountDiv.classList.add("pages-count");
    
    // // Set text content for each div
    // aNewBookCardTitleDiv.textContent = "Head First Design Patterns";
    // aNewBookCardAuthorDiv.textContent = "Freeman & Robson";
    // aNewBookCardPagesCountDiv.textContent = "354";
    
    // // Set the children of the main book card div
    // aNewBookCardDiv.appendChild(aNewBookCardTitleDiv);
    // aNewBookCardDiv.appendChild(aNewBookCardAuthorDiv);
    // aNewBookCardDiv.appendChild(aNewBookCardPagesCountDiv);
    // aNewBookCardDiv.appendChild(aNewBookCardReadButton);
    // aNewBookCardDiv.appendChild(aNewBookCardRemoveButton);
    
    // const aLastBookCardDivInPage = aMainSectionDiv.lastElementChild;
    // aMainSectionDiv.insertBefore(aNewBookCardDiv, aLastBookCardDivInPage);
}

let aLibrary = new Library();

let aAddButton = document.querySelector("#add-book-btn");
aAddButton.addEventListener("click", addBookCardToScreen.bind(aAddButton));

