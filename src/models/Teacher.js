import mongoose from "mongoose";
const { Schema } = mongoose;

const teacherSchema = new Schema({
  staffId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  phone: String,
  email: String,
  subjects: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
  status: { type: String, default: "Active" }
}, { timestamps: true });

const Teacher = mongoose.model("Teachers", teacherSchema);
export default Teacher;