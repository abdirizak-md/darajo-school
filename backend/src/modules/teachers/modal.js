  import mongoose from "mongoose";

  const teacherSchema = new mongoose.Schema(
    {
      fullName: {
        type: String,
        required: true,
        trim: true,
      },

      employeeId: {
        type: String,
        required: true,
        unique: true,
      },

      gender: {
        type: String,
        enum: ["Male", "Female"],
      },

      // 👇 TEACHER CAN TEACH MULTIPLE CLASSES
      classIds: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Class",
        },

      // 👇 TEACHER CAN TEACH MULTIPLE SECTIONS
      sectionIds: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Section",
        },

      subject: {
        type: String,
        required: true,
      },

      phone: String,
      email: {
        type: String,
        unique: true,
        sparse: true,
      },

      status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
      },
    },
    { timestamps: true }
  );

  // 🚀 performance index
  teacherSchema.index({ classIds: 1, sectionIds: 1 });

  export default mongoose.model("Teacher", teacherSchema);