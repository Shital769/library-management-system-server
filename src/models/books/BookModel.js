import BookSchema from "./BookSchema.js";

//insert books
export const insertBooks = (insertObj) => {
  return BookSchema(insertObj).save();
};

//read all books

export const getAllBooks = (filterObj) => {
  return BookSchema.find(filterObj);
};

//delete
export const deleteManyBooks = (ids, userId) => {
  return BookSchema.deleteMany({
    _id: {
      $in: ids,
    },
    userId,
  });
};
