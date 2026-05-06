import mongoose from "mongoose";
const { Schema } = mongoose;

const classSchema = new Schema({
  name: { type: String, required: true },
  level: String,
  classTeacherId: { type: Schema.Types.ObjectId, ref: "Teacher" },
  capacity: Number
}, { timestamps: true });

const Class = mongoose.model("Classes", classSchema);
export default Class;