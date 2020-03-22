class book {
    constructor (title, describes, author, read) {
    this.title = title;
    this.describes = describes;
    this.author = author;
    this.read = read;

    }
   }

   let book1 = new book ("star of war", "lorem", "J.R.R. Tolkien", true )
   let book2 = new book ("hoobit", "lorem", "J.R.R. Tolkien", true)
   let book3 = new book ("civic", "lorem", "i.f.f. Tolkien", false)

   function produceMessage(){
    let bookm = "The " + book1.title + " by " + book1.author ;

    return [bookm];


   }
   document.body.appendChild(document.createTextNode(produceMessage()));

   var books = [book1, book2, book3];


   function readOrNot(array){

    
//     let name = [];
//     for(const book of books){
//         if (book.read == read) {
//             name.push(book.name)
            
//         }
//     }
// return name;
   return array.filter(book => {
        return book.read === false
    })
}
readOrNot(books)
// document.body.appendChild(document.createTextNode(ReadOrNot()));

// const x = books.map(item => {
//     return item
    
// })
// console.log(x);

//    function test_equal(actual, expected, msg) {
//     if (Array.isArray(expected)) {
//     for (var i = 0; i < expected.length; i++){
//     test_equal(actual[i], expected[i], "item in index " + i);
//     }
//     } else if (typeof expected === "object"){
//     for (prop in expected){
//     test_equal(actual[prop], expected[prop]);
//     }
//     } else {
//     if (actual !== expected) {
//     console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
//     }
//     }
//    }
   