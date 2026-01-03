import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    publishedDate: {
        type: Date,
    },
    publisher: {
        type: String,
    },
    pages: {
        type: Number,
        required: true,
    },
    coverImageUrl: {
        type: String,
    },
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    }],
    reviews: [{
        rate: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
        },
        reviewerName: {
            type: String,
        },
        reviewDate: {
            type: Date,
            default: Date.now,
        }
    }],
}, {
    timestamps: true,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;