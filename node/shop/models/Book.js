const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "Book Name": String,
    "Author": String
});

module.exports = mongoose.model("Book",bookSchema);