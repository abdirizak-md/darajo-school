import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema({
  admissionNo: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phone: String,
  address: String,
  status: {
    type: String,
    // enum: ["Active", "Graduated", "Suspended", "Withdrawn"],
    // default: "Active"
  }
}, { timestamps: true });

const student = mongoose.model("Students", studentSchema);
export default student;


// simplified version for testing
// const studentSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     lowercase: true,
//   },
//   password: { 
//     type: String,
//     required: true,
//     lowercase: true,
//   },
//   firstName: {  
//     type: String,
//     required: true,
//     lowercase: true,
//   },
//   lastName: { 
//     type: String,
//     required: true,  
//     lowercase: true,
//   },
// });

// const Student = mongoose.model("Student", studentSchema);

// export default Student;