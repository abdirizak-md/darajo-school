import mongoose from "mongoose";
const { Schema } = mongoose;   

const subjectSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true }
});

const Subject = mongoose.model("Subjects", subjectSchema);
export default Subject;
