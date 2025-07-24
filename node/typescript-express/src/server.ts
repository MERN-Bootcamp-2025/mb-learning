import express from "express";
import usersRouter from './routes/users'

const app = express();


const PORT = 8080;

app.use('/users',usersRouter);

app.use('/',(req,res)=>res.send('running on /'))

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})