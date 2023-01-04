import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
      index: 1,
    },
    password: {
      type: Number,
      min: 6,
      max: 50,
      required: true,
    },

    phone: {
      type: Number,
      min: 10,
      max: 12,
      required: true,
    },
    userID: {
      type: Number,
      min: 1,
      max: 255,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
