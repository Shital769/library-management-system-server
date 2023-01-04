import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    min: 10,
    max: 500,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("books", bookSchema);
