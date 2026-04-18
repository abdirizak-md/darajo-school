import mongoose from "mongoose";
const { Schema } = mongoose;
const studentParentSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  parentId: { type: Schema.Types.ObjectId, ref: "Parent", required: true },
  relation: { type: String, required: true }
});

const StudentParent = mongoose.model("StudentParent", studentParentSchema);
export default StudentParent;