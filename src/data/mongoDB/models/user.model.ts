import mongoose, { Schema } from "mongoose";

const userRoles = ["USER", "SUPER_ADMIN"];

const userSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  birthday: { type: Date, required: [true, "Birthday is required"] },
  createdAt: { type: Date, required: [true, "Created is required"] },
  userTimeZone: {
    type: String,
    required: [true, "User timezone is required"],
  },
  email: { type: String, required: [true, "Email is required"] },
  role: { type: [String], default: userRoles[0], enum: userRoles },
  photo: String,
});

export const UserModel = mongoose.model("User", userSchema);
