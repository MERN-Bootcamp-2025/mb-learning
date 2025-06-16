const fs = require('fs');

//1. synchronous code runs
console.log('Start of Script (Synchronous)');

//3. microtasks always runs immediately after synchronous code before anything else
process.nextTick(()=>{//runs immediately when the currrent stack is empty, even before setTimout or setImmediate
    console.log('highest priority- nextTick');
})

//Timer phase//timeout- Macrotask that runs in timers phase on the next event loop cycle
setTimeout(()=>{
    console.log('Timer callback');
},0);

//4. I/O operation - Its callback runs in the Poll Phase
fs.readFile('loop.txt',()=>{
    console.log("File Read complete");//5. sync code

    process.nextTick(()=>{
        console.log("nextTick inside I/O Microtask")//6.runs immediately after sync code or after the callback
    });

    setTimeout(()=>{//9.
        console.log("setTimeout inside I/O Timer phase")
    },0);

    setImmediate(()=>{//8
        console.log("setImmediate inside I/O - Check Phase")
    })
})

//7. this runs in check phase(after the poll phase) i.e. after I./O operation
setImmediate(()=>{
    console.log("setImmediate - Check Phase")
})

//2. sync code runs
console.log("End of Script");

