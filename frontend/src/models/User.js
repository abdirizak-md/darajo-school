import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    // enum: ["admin", "teacher", "accountant"],
    required: true
  },
  referenceId: { type: Schema.Types.ObjectId },
  isActive: { type: Boolean, default: true },
  lastLogin: Date
}, { timestamps: true });

const User = mongoose.model("Users", userSchema);
export default User;