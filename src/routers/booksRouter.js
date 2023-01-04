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
router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const result = await insertBooks({
      ...req.body,
      userId: authorization,
    });
    result?._id
      ? res.json({
          status: "success",
          message: "transaction added successfully",
        })
      : res.json({
          status: "error",
          message: "unable to add, please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//delete

router.delete("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { authorization } = req.headers;

    const result = await deleteManyBooks(req.body, authorization);
    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: result.deletedCount + "item(s) deleted",
        })
      : res.json({
          status: "error",
          message: "Nothing happened",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
