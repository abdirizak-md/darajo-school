  import mongoose from "mongoose";
  import roles from "../../common/constant/roles.js";
const userSchema = new mongoose.Schema(
  {
    name: String,

    identifier: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      sparse: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(roles), // ADMIN, TEACHER, STUDENT
      required: true,
    },

    // ✅ NEW FIELD (IMPORTANT)
profile: {
  type: mongoose.Schema.Types.ObjectId,
  ref: function () {
    return this.role;
  },
},

 
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;