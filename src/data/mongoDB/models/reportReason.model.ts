import mongoose, { Schema } from "mongoose";

const reportReasonSchema = new Schema({
  id: String,
  description: String,
  reportType: String,
});

export const ReportReasonModel = mongoose.model(
  "ReportReason",
  reportReasonSchema
);
