import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dateOfBirth: {
        type: Date,
    }
}, {
    timestamps: true,
});

const Author = mongoose.model("Author", authorSchema);

export default Author;  