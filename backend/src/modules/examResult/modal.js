import mongoose from "mongoose";

const examResultSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    examId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },

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

    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },

    totalMarks: {
      type: Number,
      required: true,
    },

    obtainedMarks: {
      type: Number,
      required: true,
    },

    grade: {
      type: String,
      enum: ["A+", "A", "A", "B", "C", "D", "F"],
    },

    gpa: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pass", "Fail"],
      required: true,
    },
  },
  { timestamps: true }
);

// prevent duplicate result per student per exam per subject
examResultSchema.index(
  { studentId: 1, examId: 1, subjectId: 1 },
  { unique: true }
);

export default mongoose.model("ExamResult", examResultSchema);