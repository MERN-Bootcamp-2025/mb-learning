//--------------------------------------------------Exercise-1-------------------------------------------
//1. Create examples showing the difference between primitive and reference types

const { debug } = require("console");
const { resolve } = require("path");

//Primitive Type
let a = 10;
let b = a;
b = 20;

console.log(`a: ${a} and b: ${b}`);
//Reference Type
let obj1 = { name: "Arzoo" };
let obj2 = obj1;

obj2.name = "Aastha";

console.log(`obj1: ${obj1.name} and obj2: ${obj2.name}`);
//Primitive Type- copied by value(changing one doesn't affect the other)
//Reference Type- copied by refernce i.e. memory location(therefore, changing one affects the other)

//2. Demonstrate shallow vs deep copying of objects and arrays

//Shallow Copy - Duplicates the top-level properties, but the nested objects are still shared
const originalObj = {
    author: "Holly Jackson",
    book: "AGGGTM",
    address: { city: "London" }
};

const duplicateObj = { ...originalObj };
duplicateObj.address.city = "Paris";

console.log(`original-book: ${originalObj.address.city} and duplicate-book: ${duplicateObj.address.city}`);

//Deep Copy- creates a complete different clone, even for nested structure
const originalObj1 = {
    author: "Holly Jackson",
    book: "AGGGTM",
    address: { city: "London" }
};

const duplicateObj1 = JSON.parse(JSON.stringify(originalObj));
duplicateObj1.address.city = "Paris";

console.log(`original-book: ${originalObj1.address.city} and duplicate-book: ${duplicateObj1.address.city}`);

//3. Show how reference types behave when passed to functions

function refFunc(author) {
    author.book = "the reapperance of rachel price";
}
const authorInfo = {
    author: "Holly Jackson",
    book: "AGGGTM"
}
refFunc(authorInfo)
console.log(authorInfo);

//4. Implement practical examples of reference type pitfalls and solutions --- Didn't get!!


//--------------------------------Exercise 2-------------------------------------------

//1. Use spread operator for: Array merging and cloning, Object merging and updating, Function argument expansion

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergeArr = [...arr1, ...arr2];
console.log("Merged rray: ", mergeArr);

const arr3 = [7, 8, 9];
const dupliArr = [...arr3];

console.log("Duplicate Array: ", dupliArr);

function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums));

// Use rest operator for: Function parameters, Array destructuring, Object destructuring

function skills(...args) {
    console.log(`Skills are ${args}`);
}

skills("HTML", "CSS", "JS", "NodeJS", "ReactJS");

const [first, ...rest] = [10, 20, 30, 40, 50];
console.log("First: ", first);
console.log("Rest are: ", rest);

const { name1, ...userInfo } = {
    name1: "Arzoo",
    city: "Pune",
    job: "Trainee software Emgineer"
};

console.log("Name: ", name1);
console.log("User Info: ", userInfo);

// Create practical utility functions using these operators

//1.Merge Array
function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

console.log(mergeArrays([1, 2], [4, 5], [7, 8, 9]));

//2. Update Object with Defaults
function appluDefaults(obj, defaults) {
    return { ...defaults, ...obj };
}

const config = appluDefaults({ theme: "dark" }, { theme: "light", debug: false });
console.log(config);

//obj: the actual object provided(like user input or config override)
//defaults: the fallback values(used if a property is missing in obj)

//so, it first sprads default into a new object, then it spreads obj
//into the same overriding the matching keys.

//3. Dynamic Argument Calculator
function multiplyAll(...nums) {
    return nums.reduce((acc, n) => acc * n, 1);
}
console.log(multiplyAll(2, 3, 4));
//reduce=> takes a fucntion and runs it accross the array to reduce it to a single value
//it starts with initial value 1
//at each step: acc is the accumulated result so far and n is the curr num in the array

//---------------------Exercise 3-------------------------

//1. Extract values from complex nested objects

const user = {
    id: 101,
    name: "Arzoo",
    contact: {
        email: "arzoo25@gmail.com",
        phone: "7165713661"
    },
    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            sms: false
        }
    }
};

const {
    name,
    contact: { email },
    preferences: {
        notifications: { sms }
    }
} = user;

console.log(`Name: ${name} Contact: ${email} Notifications: ${sms}`);

//2. Use destructuring in function parameters

const person = {
    name: "Hassan",
    contact: {
        phone: "888-9999-00"
    }
};

function print({ name, contact: { phone } }) {
    console.log(`${name}'s phone number is ${phone}`)
}

print(person);

//3. Implement array destructuring with default values

const authors = ["Alice feeney"];

const [author1, author2 = "Agatha christie"] = authors;
console.log(`Author1: ${author1} and second is ${author2}`);
//4. Show renaming and default value assignment

const settings = {
    resolution: "360p"
}
//renaming resolution to res and default to framerate
const { resolution: res, framerate = 60 } = settings;

console.log(res); console.log(framerate);

//---------------------Exercise 4---------------------------

//1. Create custom Promises for different scenarios
//success case

function getUserData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ id: 1, name: "Arzoo" });
        }, 1000);
    });
}

getUserData().then(data => console.log(data));

//failure case

function fetchUser(isOnline) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (isOnline) {
                res("User data loaded");
            } else {
                rej("User is offline");
            }
        }, 1500);
    });
}
fetchUser(true).then(data => console.log(data));

//2. Chain multiple Promise operations

function step1() {
    return Promise.resolve("Boling water");
}

function step2(result) {
    return Promise.resolve(result + "-> Adding chaipatti, sugar and adrak");
}

function step3(result) {
    return Promise.resolve(result + "-> Adding Milk and boling till the color changes to brown.");
}

function step4(result) {
    return Promise.resolve(result + "-> serve hot.");
};

step1()
    .then(step2)
    .then(step3)
    .then(step4).then(final => console.log(final))
    .catch(err => console.log("Error: ", err));

//3. Handle Promise errors with .catch()

fetchUser(false)
    .then(res => console.log(res))
    .catch(err => console.error("Error caught:", err)); // Error caught: User is offline

//4. Simulate API calls with setTimeout and Promises

function simulateApiCall(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${endpoint}`);
        }, Math.random() * 2000);
    });
}

simulateApiCall("/users")
    .then(data => {
        console.log(data);
        return simulateApiCall("/posts");
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Api error: ", err);
    });