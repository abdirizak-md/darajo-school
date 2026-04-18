import mongoose from "mongoose";
const { Schema } = mongoose;

const parentSchema = new Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  address: String
}, { timestamps: true });

const Parent = mongoose.model("Parent", parentSchema);
export default Parent;
