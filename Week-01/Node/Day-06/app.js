const http = require('http');
const express = require('express');
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/users.js');
// const server = http.createServer();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use((req,res,next)=>{
    console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`);
    next();
})

// app.use((req,res,next)=>{
//     console.log("In the first middleware");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("In the second middleware");
// })

// app.use("/", (req, res, next) => {
//     console.log("In the home middleware");
//     next();
//     //here we will use next before res.send bcz we wants that before showing / page data we want to see next route's data
//     res.send('<h1>Home Page</h1>');
//     //but we are trying to send response from this middleware after calling next() this causes the error like: Cannont set headers after they are sent to the client
// })

app.use(userRoutes);

app.get("/about", (req, res, next) => {
    console.log("In the about middleware");
    res.send('<h1>About this app</h1>');
})


app.use("/",(req,res,next)=>{
    console.log("In the home middleware");
    res.send('<h1>Welcome to Express!</h1>')
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});

// server.listen(PORT,()=>{
//    console.log(`Server running on port: ${PORT}`)
// });