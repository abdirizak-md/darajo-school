import mongoose from "mongoose";
const { Schema } = mongoose;

const attendanceSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  classId: { type: Schema.Types.ObjectId, ref: "Class", required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    // enum: ["Present", "Absent", "Late"],
    required: true
  }
});

const Attendance = mongoose.model("Attendances", attendanceSchema);
export default Attendance;

