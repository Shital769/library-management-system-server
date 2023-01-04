import express from "express";

import { findUser, insertUser } from "../models/user/userModel.js";
const router = express.Router();

//create user router
router.post("/", async (req, res, next) => {
  try {
    const user = await insertUser(req.body);
    console.log(user);

    if (user?._id) {
      return res.json({
        status: "Success",
        message: "User created successfully. You can login now",
      });
    }
    res.json({
      status: "error",
      message: "Unable to create user. Please try again.",
    });
  } catch (error) {
    console.log(error.message);

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.code = 200;
      error.message =
        "There is already another user exist with the same email, Please reset passowrd to use or use different email to register";
    }

    next(error);
  }
});

//login user

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);

    //grab the data comig from login form
    const user = await findUser(req.body);
    console.log(user);

    user?._id
      ? res.json({
          status: "Success",
          message: "Login successful",
          user: {
            name: user.name,
            _id: user._id,
          },
        })
      : res.json({
          status: "error",
          message: "Error! invalid login detials",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
