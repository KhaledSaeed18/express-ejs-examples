import Book from "../models/book.model.js";
import Author from "../models/author.model.js";

// Controller to get all books
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('authors');
        res.render('books/index', { books });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Controller to get a single book by ID
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('authors');
        if (!book) {
            return res.status(404).send('Book not found');
        }
        res.render('books/detail', { book });
    } catch (error) {
        res.status(500).send(error.message);
    }
};