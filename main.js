let myLibrary = []

const dialog = document.querySelector('dialog')
const addBtn = document.querySelector('.addBtn');
const closeBtn = document.querySelector('.closeBtn')
const deleteBtn = document.querySelector('.delBtn');
const readBtn = document.querySelector('.read');
const submitBtn = document.querySelector('.submit');
const content = document.querySelector('.content');


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

function updateUI(){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    myLibrary.forEach(book => {
        const div = document.createElement('div');
        const delBook = document.createElement('button');
        
        div.classList.add('card');
        delBook.classList.add('delBook');
        delBook.setAttribute('data-id', book.id)
        div.innerHTML = `${book.title} <br> by ${book.author}`;
        delBook.innerHTML = '<i class="fa-solid fa-trash"></i>'
        div.append(delBook);
        content.appendChild(div);
    
    });   
}

content.addEventListener('click', (e) => {
    if (e.target.closest('.delBook')){
        const bookId = e.target.closest('.delBook').getAttribute('data-id');
        removeBook(bookId)
    };
})

function removeBook(id){
    myLibrary = myLibrary.filter(book => book.id != id);
    updateUI();
}


addBtn.addEventListener("click", () =>{
    dialog.showModal();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#checkbox').checked;
    const id =  crypto.randomUUID();

    
    addBookToLibrary(title, author, pages, read, id);
    updateUI();
    dialog.close();

})

closeBtn.addEventListener("click", (e) =>{
    dialog.close();
});

console.log(myLibrary)
console.log(submitBtn)


