import mongoose from "mongoose";
const { Schema } = mongoose;
    
const resultSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
  examId: { type: Schema.Types.ObjectId, ref: "Exam", required: true },
  score: { type: Number, required: true },
  grade: String
});

resultSchema.index(
  { studentId: 1, subjectId: 1, examId: 1 },
  { unique: true }
);

const Result = mongoose.model("Result", resultSchema);
export default Result;
