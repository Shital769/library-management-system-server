import userSchema from "./userSchema.js";

//create user

export const insertUser = (obj) => {
  return userSchema(obj).save();
};

//login user
export const findUser = (obj) => {
  return userSchema.findOne(obj);
};
