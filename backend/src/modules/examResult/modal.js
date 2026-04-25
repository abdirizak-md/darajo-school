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
      enum: ["A+", "A", "B", "C", "D", "F"],
    },
    gpa: {
  type: Number,
  default: 0,
},

    status: {
      type: String,
      enum: ["Pass", "Fail"],
      default: "Pass",
    },
  },
  { timestamps: true }
);

// prevent duplicate result per student per subject per exam
// examResultSchema.index(
//   { studentId: 1, examId: 1, subjectId: 1 },
//   { unique: true }
// );

export default mongoose.model("ExamResult", examResultSchema);