import mongoose from "mongoose";

const subjectAssignSchema = new mongoose.Schema(
  {
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
  },
  { timestamps: true }
);

// prevent duplicate assignment
subjectAssignSchema.index(
  { subjectId: 1, classId: 1 },
  { unique: true }
);

export default mongoose.model("SubjectAssign", subjectAssignSchema);