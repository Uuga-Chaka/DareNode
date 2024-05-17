import mongoose, { Schema } from "mongoose";

const challengeSchema = new Schema({
  content: String,
  createdAt: Date,
  createdBy: String,
  type: String,
  likes: Number,
  dislikes: Number,
});

const ChallengeModel = mongoose.model("Challenge", challengeSchema);
