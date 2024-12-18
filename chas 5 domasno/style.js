//Homework 1
const animal = {
  name: "Dog",
  kind: "Bulldog",
  speak: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
};

animal.speak("hey bro!!!");
//Homework 2

class Book {
  constructor(bookTitle, bookAuthor, bookReadingStatus) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.readingStatus = bookReadingStatus;
  }
  yourReadingStatus() {
    if (this.readingStatus === true) {
      console.log(`You alredy read ${this.title} by ${this.author}`);
    } else {
      console.log(`You still need to read ${this.title} by ${this.author}`);
    }
  }
}
const myBook = new Book(`The Robots of dawn`, ` Isaac Asimov`, true);
// console.log(myBook);
myBook.yourReadingStatus();

const secondBook = new Book(
  `Mockingjay: The Final Book of The Hunger Games`,
  `Suzanne Collins`
);
// console.log(secondBook);
secondBook.yourReadingStatus();
