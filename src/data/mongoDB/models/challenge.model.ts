import mongoose, { Schema } from "mongoose";

const challengeSchema = new Schema({
  content: String,
  createdAt: Date,
  createdBy: String,
  type: String,
  likes: Number,
  dislikes: Number,
});

export const ChallengeModel = mongoose.model("Challenge", challengeSchema);
