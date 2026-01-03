import mongoose from "mongoose";
import connectDatabase from "../config/db.js";
import Author from "../models/author.model.js";
import Book from "../models/book.model.js";
import dotenv from "dotenv";

dotenv.config();

const seedDatabase = async () => {
    try {
        // Connect to database
        await connectDatabase(process.env.DATABASE_URL || "mongodb://localhost:27017/ssr");

        // Clear existing data
        await Author.deleteMany({});
        await Book.deleteMany({});

        console.log("Cleared existing data");

        // Create sample authors
        const authors = await Author.insertMany([
            {
                firstName: "J.K.",
                lastName: "Rowling",
                email: "jk.rowling@example.com",
                dateOfBirth: new Date("1965-07-31")
            },
            {
                firstName: "George",
                lastName: "Orwell",
                email: "george.orwell@example.com",
                dateOfBirth: new Date("1903-06-25")
            },
            {
                firstName: "Harper",
                lastName: "Lee",
                email: "harper.lee@example.com",
                dateOfBirth: new Date("1926-04-28")
            },
            {
                firstName: "F. Scott",
                lastName: "Fitzgerald",
                email: "fscott.fitzgerald@example.com",
                dateOfBirth: new Date("1896-09-24")
            },
            {
                firstName: "Jane",
                lastName: "Austen",
                email: "jane.austen@example.com",
                dateOfBirth: new Date("1775-12-16")
            }
        ]);

        console.log("Created authors:", authors.length);

        // Create sample books
        const books = await Book.insertMany([
            {
                title: "Harry Potter and the Philosopher's Stone",
                description: "The first book in the Harry Potter series, following the young wizard Harry Potter.",
                price: 19.99,
                publishedDate: new Date("1997-06-26"),
                publisher: "Bloomsbury",
                pages: 223,
                coverImageUrl: "https://example.com/harry-potter-1.jpg",
                authors: [authors[0]._id],
                reviews: [
                    {
                        rate: 5,
                        comment: "A magical adventure that captivated me from the first page!",
                        reviewerName: "BookLover123",
                        reviewDate: new Date("2023-01-15")
                    },
                    {
                        rate: 4,
                        comment: "Great story, though a bit long for younger readers.",
                        reviewerName: "ParentReader",
                        reviewDate: new Date("2023-02-20")
                    }
                ]
            },
            {
                title: "1984",
                description: "A dystopian social science fiction novel about totalitarian control.",
                price: 14.99,
                publishedDate: new Date("1949-06-08"),
                publisher: "Secker & Warburg",
                pages: 328,
                coverImageUrl: "https://example.com/1984.jpg",
                authors: [authors[1]._id],
                reviews: [
                    {
                        rate: 5,
                        comment: "A timeless warning about surveillance and freedom.",
                        reviewerName: "HistoryBuff",
                        reviewDate: new Date("2023-03-10")
                    }
                ]
            },
            {
                title: "To Kill a Mockingbird",
                description: "A novel about racial injustice and childhood innocence in the American South.",
                price: 16.99,
                publishedDate: new Date("1960-07-11"),
                publisher: "J.B. Lippincott & Co.",
                pages: 376,
                coverImageUrl: "https://example.com/to-kill-a-mockingbird.jpg",
                authors: [authors[2]._id],
                reviews: [
                    {
                        rate: 5,
                        comment: "Powerful and thought-provoking. A must-read classic.",
                        reviewerName: "LiteraryFan",
                        reviewDate: new Date("2023-04-05")
                    },
                    {
                        rate: 5,
                        comment: "Changed my perspective on many things.",
                        reviewerName: "YoungReader",
                        reviewDate: new Date("2023-05-12")
                    }
                ]
            },
            {
                title: "The Great Gatsby",
                description: "A classic American novel about the Jazz Age and the American Dream.",
                price: 13.99,
                publishedDate: new Date("1925-04-10"),
                publisher: "Charles Scribner's Sons",
                pages: 180,
                coverImageUrl: "https://example.com/great-gatsby.jpg",
                authors: [authors[3]._id],
                reviews: [
                    {
                        rate: 4,
                        comment: "Beautiful prose, but the ending left me wanting more.",
                        reviewerName: "ClassicReader",
                        reviewDate: new Date("2023-06-18")
                    }
                ]
            },
            {
                title: "Pride and Prejudice",
                description: "A romantic novel about manners, upbringing, morality, and marriage.",
                price: 12.99,
                publishedDate: new Date("1813-01-28"),
                publisher: "T. Egerton",
                pages: 432,
                coverImageUrl: "https://example.com/pride-and-prejudice.jpg",
                authors: [authors[4]._id],
                reviews: [
                    {
                        rate: 5,
                        comment: "Elizabeth Bennet is such a relatable character!",
                        reviewerName: "RomanceLover",
                        reviewDate: new Date("2023-07-22")
                    },
                    {
                        rate: 4,
                        comment: "A bit slow at first, but the wit and social commentary make it worthwhile.",
                        reviewerName: "ModernReader",
                        reviewDate: new Date("2023-08-30")
                    }
                ]
            },
            {
                title: "Harry Potter and the Chamber of Secrets",
                description: "The second book in the Harry Potter series.",
                price: 19.99,
                publishedDate: new Date("1998-07-02"),
                publisher: "Bloomsbury",
                pages: 251,
                coverImageUrl: "https://example.com/harry-potter-2.jpg",
                authors: [authors[0]._id],
                reviews: [
                    {
                        rate: 5,
                        comment: "Even better than the first one!",
                        reviewerName: "HarryFan",
                        reviewDate: new Date("2023-09-14")
                    }
                ]
            }
        ]);

        console.log("Created books:", books.length);
        console.log("Database seeded successfully!");

    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        // Close database connection
        await mongoose.connection.close();
        console.log("Database connection closed");
    }
};

// Run the seeder
seedDatabase();