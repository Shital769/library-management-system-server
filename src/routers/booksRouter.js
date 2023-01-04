import express from "express";

import {
  getAllBooks,
  insertBooks,
  deleteManyBooks,
} from "../models/books/BookModel.js";

const router = express();

//read
router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const transactions = await getAllBooks({
      userId: authorization,
    });

    res.json({
      status: "success",
      message: "get method to do",
      transactions,
    });
  } catch (error) {
    next();
  }
});

//create
