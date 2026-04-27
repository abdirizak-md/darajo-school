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
     

      phone: String,
      email: {
        type: String,
        unique: true,
        sparse: true,
      },
      address: String,
      password: {
        type: String,
      
        select: false,
      
      },

      status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
      },
    },
    { timestamps: true }
  );

 


  export default mongoose.model("Teacher", teacherSchema);