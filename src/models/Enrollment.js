import mongoose from "mongoose";    
const { Schema } = mongoose;
const enrollmentSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  classId: { type: Schema.Types.ObjectId, ref: "Class", required: true },
  academicYear: { type: String, required: true },
  status: { type: String, default: "Active" }
}, { timestamps: true });

enrollmentSchema.index({ studentId: 1, academicYear: 1 }, { unique: true });

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
export default Enrollment;
