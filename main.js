const myLibrary = []

const addBtn = document.querySelector('.addBtn');
const deleteBtn = document.querySelector('.delBtn');
const readBtn = document.querySelector('.read');

function Book (title, author, pages, read, id = crypto.randomUUID()){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id
    
    if(read){
        read = 'read';
    } else {
        read ='not read yet';
    }

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}, id: ${id} `
    }
}

function addBookToLibrary(title, author, pages, read, id) {
    let book = new Book(title, author, pages, read, id)
    myLibrary.push(book)
}


function displayBook(myLibrary){
    let arrayLength = myLibrary.length
    
    for(let i = 0; i < arrayLength; i++){
        console.log(myLibrary[i])
    }

}




addBookToLibrary("hello")
displayBook(myLibrary)

console.log(myLibrary)