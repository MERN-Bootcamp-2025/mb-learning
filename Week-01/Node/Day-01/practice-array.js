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
let a = [ 10, 20, 30, 40, 50, 60, 70]


let chunk = 4;

//using slice method
let a1 = a.slice(0, chunk);
let a2 = a.slice(chunk, chunk + a.length);


console.log('Array 1: ' + a1 + '\nArray 2: ' + a2);