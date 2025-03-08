const myLibrary = []

const dialog = document.querySelector('dialog')
const addBtn = document.querySelector('.addBtn');
const closeBtn = document.querySelector('.closeBtn')
const deleteBtn = document.querySelector('.delBtn');
const readBtn = document.querySelector('.read');
const submitBtn = document.querySelector('.submit');


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

    myLibrary.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `${item.title} <br> by ${item.author}`;
        content.appendChild(div);
    
    });   
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


