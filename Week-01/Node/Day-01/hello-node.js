console.log("Hello, Iam Arzoo Jain.");

//tryong variables

// let name = "Hassan";
// console.log("Name: ",name);

//Using function

function greet(person){
    console.log(`Hello from my first Node App! - ${person}`);
}
greet("Arzoo");

//arrowfunction , destructuring

const person = {
    name1: "Alice Fenney",
    job: "Author",
    book: "Rock, paper, scissors"
}

const {name1, book} = person;
console.log(`My current read is ${book} by the author ${name1}`);

//using loops
for(let i in person){
    console.log(i);
}

//arrays
const authors = ["Khalid hussani","Agatha Christie","Holly JAckson","Durjoy Dutta"];
authors.forEach(author => console.log(`Author: ${author}`));