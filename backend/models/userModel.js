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
    studentNumber: {
      type: String,
      required: true,
      unique: true,
    },
    yearLevel: {
      type: String,
      enum: ["1st", "2nd", "3rd", "4th", "5th"],
      required: true,
    },
    pinKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
