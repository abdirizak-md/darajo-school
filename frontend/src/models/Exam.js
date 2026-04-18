import mongoose from "mongoose";
const { Schema } = mongoose;

const examSchema = new Schema({
  name: { type: String, required: true },
  term: { type: String, required: true },
  academicYear: { type: String, required: true }
});

const Exam = mongoose.model("Exam", examSchema);
export default Exam;
