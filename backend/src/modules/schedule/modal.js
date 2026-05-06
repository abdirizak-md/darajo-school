import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    timeFrom: {
      type: String,
      required: true,
    },
    timeTo: {
      type: String,
      required: true,
    },
    days: [
      {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Schedule", scheduleSchema);