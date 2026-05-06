import mongoose from "mongoose";

const schema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  balance: { type: Number, default: 0 },
});

export default mongoose.model("Balance", schema);