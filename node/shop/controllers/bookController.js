const Book = require("../models/Book");

const getAllBooks = async(req,res)=>{
    try{
        const books = await Book.find();//fetch all book from the db
        res.json(books);
    }catch(error){
        console.error('Error fetching books', error);
        res.status(500).json({error: "Failed to fetch books from mongodb"});
    }
}

module.exports = {getAllBooks};