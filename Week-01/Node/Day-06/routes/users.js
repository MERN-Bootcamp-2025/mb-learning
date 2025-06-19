const express = require('express');
const router = express.Router();

router.get('/add-user',(req,res,next)=>{
    console.log("Adding user");
    res.send(`
        <form action="/user-submit" method="POST">
        <input type="text" name="name"/>
        <button type="submit">Submit</button>
        </form>
    `)
})

router.post('/user-submit',(req,res,next)=>{
    console.log("Received user data");
    next();
    
},(req,res)=>{
    // console.log(req.body);
    const {name} = req.body;
    if(!name){return res.send("Name is required")}
    res.send(`<h1>Thank you, ${name}</h1>`);
})

router.post('/submit',(req,res,next)=>{
    console.log("Submitted Data!");
    next();
},(req,res)=>{
    const {name} = req.body;
    if(!name){return res.send("Name is required")}
    res.send(`Thank you, ${name}`);
})

module.exports = router;