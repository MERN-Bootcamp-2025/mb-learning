const Book = require("../models/Book");
const User = require("../models/User");


const createBook = async (req, res, next) => {
  try {
    //take user data fro the request body
    const { title, author, rating } = req.body;
    const image = req.file?.path;

    //just a check
    if (!title || !author || !rating || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //create new book object with received data
    const book = new Book({
      title,
      author,
      image,
      rating,
      user: req.user._id,
    });

    const savedBook = await book.save();

    // Also update the user's books array
    await User.findByIdAndUpdate(req.user._id, {
      $push: { books: savedBook._id }
    });

    res.status(201).json(savedBook);
  } catch (err) {
    next(err);
  }


};


const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find().populate("user", "name email");
    res.json(books);
  } catch (err) {
    next(err);
  }
};


const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id).populate("user", "name email");
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    next(err);
  }
};


const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this book" });
    }

    const updatedData = {
      title: req.body.title || book.title,
      author: req.body.author || book.author,
      rating: req.body.rating || book.rating,
    };

    if (req.file?.path) updatedData.image = req.file.path;

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });

    res.json(updatedBook);
  } catch (err) {
    next(err);
  }
};


const deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this book" });
    }

    await Book.findByIdAndDelete(req.params.id);

    // Remove from user's books array
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { books: req.params.id }
    });

    res.json({ message: "Book deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
};
