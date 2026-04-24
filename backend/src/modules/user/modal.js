import mongoose from "mongoose";
import roles from "../../common/constant/roles.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    // 🔥 unified login field
    identifier: {
      type: String,
      required: true,
      unique: true, // email OR admissionNumber
    },

    // optional (only for admin/teacher mostly)
    email: {
      type: String,
      sparse: true, // allows null but keeps unique behavior
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(roles),
      required: true,
    },

    profile: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "role",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);