import { findUser } from "../models/user/userModel.js";

export const isAuthorized = async (req, res, next) => {
  // if user valid, true  otherwise false
  try {
    const { authorization } = req.headers;
    console.log(authorization);

    const user = authorization ? await findUser({ _id: authorization }) : null;
    console.log(user);
    user?._id
      ? next()
      : res.json({
          status: "error",
          message: "Unauthorized",
        });
  } catch (error) {
    console.log(error);
    next();
  }
};
