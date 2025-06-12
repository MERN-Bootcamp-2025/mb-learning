// Exercise 1
//Create examples demonstrating let, const, and var differences
function egVar() {
    var x = 10;
    //    console.log(x);
    // here x is obviously accessible
}
// console.log(x);
//now since var has functional scope it is not accessible outside the function
// egVar();
function egLet() {
    let x = 10; //let is block scope
    //console.log(x); output is 10 since it is within the block scope
}
//console.log(x); here we get error since it is out of the block scope of let
// egLet();
function egConst() {
    const x = 10;
    console.log(x);
    //x = 12;  this will again give error because reassigning in const is not allowed
}
//console.log(x); here again we'll get error because the scope of const is also
// egConst()
// use cases of const, let, var
//var is ES5 while let and const are ES6
// var is not used that often now, its been considered old
// let can used with variables that might change later
// const is used with arrays and objects
function funcScope() {
    var funcScoped = "I exist in this whole function";
    console.log(funcScoped);
}
funcScope();
//   console.log(funcScoped); will give error outside it's functionl scope


/*
  Exercise 2
  Write the same functionality using: Traditional function declaration, Function expression, Arrow function with explicit return, Arrow function with implicit return
  Demonstrate this binding differences
  Include higher-order functions (functions that accept/return other functions)
*/
// 1) Traditional way
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Arzoo")); // Hello, Arzoo!

// 2) Function expression
const greet = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet("Aastha")); // Hello, Aastha!

//  3) Arrow function with explicit return
const greet = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet("Arzoo")); // Hello, Arzoo!

// 4) Arrow function with implicit return
const greet = name => `Hello, ${name}!`;
console.log(greet("Sheelu")); // Hello, Sheelu!

// ----- this binding differences
// function vs arrow function
const person = {
    name: "Amir",

    // Traditional function (this refers to the object)
    sayHello: function () {
        console.log(`Hello from ${this.name}`);
    },

    // Arrow function (this is NOT bound to the object)
    sayHelloArrow: () => {
        console.log(`Hello from ${this.name}`);
    }
};

person.sayHello();       // Hello from Amir
person.sayHelloArrow();  // Hello from undefined (or global object)

// Traditional functions bind this to the object calling the method.

// Arrow functions do not have their own this — they inherit it from their surrounding scope.


// ----- higher order functions
// a) function accepting another function
function greet(name, formatter) {
    return formatter(name);
}
function toUpper(name) {
    return name.toUpperCase();
}
console.log(greet("Arzoo", toUpper));
// b) returning another function
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10



// ---------Exercise 4---------
/*
    Create arrays and demonstrate essential methods: map() for transformation, filter() for selection, reduce() for aggregation, find() and some() for searching
    Chain multiple array methods together
    Show array destructuring and spread operator usage
*/

// let arr = [1, 2, 3, 4, 5];

// // Iterating through loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // Pop an element from array
// arr.pop();
// console.log("After using pop() Method: " + arr);

//remove duplicates from array objects
// const a = [
//     { a: '1', b: '2' },
//     { c: '2', d: '4' },
//     { c: '2', d: '4' },
//     { a: '1', b: '2' }
// ];

// const uniqueArray = a.filter((o, index, arr) =>
//     arr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index
// );

// console.log(uniqueArray);

//using Set
// const uniqueArray = Array.from(new Set(a.map(o => JSON.stringify(o)))).map(str => JSON.parse(str));

// console.log(uniqueArray);

//Split array in chunks
let a = [10, 20, 30, 40, 50, 60, 70]


let chunk = 4;

//using slice method
let a1 = a.slice(0, chunk);
let a2 = a.slice(chunk, chunk + a.length);


console.log('Array 1: ' + a1 + '\nArray 2: ' + a2);


//Sample Array----------
const users = [
  { id: 1, name: "arzoo", age: 25, active: true },
  { id: 2, name: "aastha", age: 30, active: false },
  { id: 3, name: "mansi", age: 22, active: true },
  { id: 4, name: "jidnya", age: 28, active: false },
];

//1. map() -> iterate to each element
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie', 'Diana']

//2. filter() -> selecting particular elem of an array
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// [{id: 1, ...}, {id: 3, ...}]

//3. reduce()-> need to aggregate values
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(totalAge); // 105

//4.find
const findAge = users.find(user => user.age>25);
console.log(findAge);// user of id 1

//5. some -> atleast one match?
const hasInActive = users.find(user => !user.active);
console.log(hasInActive);// true

//6. Method chaining
const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name)
  .sort();

console.log(activeUserNames); // ['arzoo', 'mansi']

//7.Array Destructuring
const [firstUser, secUser, ...rest] = users;
console.log(firstUser);
console.log(rest.length);//2

//8.Spread Operator
const copyUsers = [...users];//copy array

const newUsers = [
    ...users,
    {id:5,name:"madhura",age:23,active:false}
];
console.log(newUsers.length);

//merging two array
const names1 = ["Amir", "Hassan"];
const names2 = ["Charlie", "Diana"];
const allNames = [...names1, ...names2];
console.log(allNames); // ['Amir', 'Hassan', 'Charlie', 'Diana']



// -----exercise 
// 1) template literals - allow multi-line strings using backtick ``
const name1 = "Arzoo";
const age = 25;
const greet = `Hello, my name is ${name1}.
I am ${age} years old.
`;
console.log(greet);

// 2) destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first);
console.log(second);
const user = { name: "Arzoo", age: 23, city: "Bhopal" };
const { namee, city } = user;
console.log(name); // "Arzoo"
console.log(city); // "Bhopal"

// 3) default parameter in functions
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet("Arzoo")); // Hello, Arzoo
console.log(greet());        // Hello, Guest
// when not passing any value it returns default values in this case it is guest

// --------rest parameters------
//rest simply packs arguments into an array
function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
    //here we have converted the args into an array and on that we applied
    //array method reduce() which is then calculating the sum of all the values in args
}
console.log(sum(1, 2, 3, 4));
// -----spread syntax------
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]
const obj1 = { a: 1, b: 2 };
const obj3 = { ...obj1, c: 3 };
console.log(obj3);

//Optional Chaining
const optional = {
  profile: {
    email: "optional@example.com"
  }
};

console.log(optional.profile?.email);     // optional@example.com
console.log(optional.settings?.theme);    // undefined (no error!)

//Nullish Coalescing - use default value only if left side in null or undefined(i.e. nullish)

const username = null;
const displayName = username ?? "Anonymous";
console.log(displayName); // Anonymous

const score = 0;
const finalScore = score ?? 100;
console.log(finalScore); // 0 (because 0 is not null/undefined)

//Exercise 3

//1. complex object creation 

const userProfile = {
  id: 101,
  name: "Arzoo",
  contact: {
    email: "arzoo@example.com",
    phone: "123-456-7890"
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false
    }
  },
  roles: ["editor", "dev"],
  
  // Method shorthand
  login() {
    console.log(`${this.name} logged in.`);
  },
  
  // Computed property name
  ['last-login']: new Date().toISOString()
};

userProfile.login(); // Arzoo logged in.

//basic destructuring
const {name,roles} = userProfile;
console.log(name);

//nested destructuring
const {
  contact: { email, phone },
  settings: { notifications: { email: emailNotif } }
} = userProfile;

console.log(email);       // alice@example.com
console.log(emailNotif);  // true

//Accessing and modyfing object properties

//dot notation
console.log(userProfile.name); // Alice
userProfile.name = "Alicia";

//add new poperties
userProfile.location = "India";

//modify nested properties
userProfile.settings.notifications.sms = true;


//Computed property names and method shorthands
const key = "roleLevel";

const adminInfo = {
    name:"Admin",
    [key]: 5,
    sayHi(){
        console.log("hi from the Admin!!")
    }
};
adminInfo.sayHi();//hi from the Admin!!