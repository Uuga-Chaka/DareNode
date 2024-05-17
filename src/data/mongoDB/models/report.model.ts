import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema({
  reportingUserId: String,
  reportedChallengeId: String,
  reasonId: String,
  createdAt: Date,
});

export const ReportModel = mongoose.model("Report", reportSchema);
