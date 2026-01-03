import mongoose from "mongoose";

async function connectDatabase(connectionString) {
    try {
        await mongoose.connect(connectionString, {
            connectTimeoutMS: 2000,
            serverSelectionTimeoutMS: 2000
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}

export default connectDatabase;