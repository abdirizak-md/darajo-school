import Teacher from "./modal.js";
import User from "../user/modal.js";
import { hashPassword } from "../../common/utils/hashPassword.js";
import AppError from "../../common/utils/appError.js";
import roles from "../../common/constant/roles.js";

// ➕ CREATE TEACHER + USER
export const createTeacherService = async (data) => {
  const { fullName, employeeId, email, password, gender } = data;

  // 1. validation
  if (!fullName || !employeeId || !email || !password) {
    throw new AppError("Missing required fields", 400);
  }

  // 2. check existing user
  const existingUser = await User.findOne({
    $or: [{ identifier: employeeId }, { email }],
  });

  if (existingUser) {
    throw new AppError("Teacher already exists", 409);
  }

  // 3. hash password
  const hashedPassword = await hashPassword(password);

  // 4. create teacher first
  const teacher = await Teacher.create({
    fullName,
    employeeId,
    email,
    gender,
  });

  try {
    // 5. create user account
  const user = await User.create({
  name: fullName,
  identifier: employeeId,
  email,
  password: hashedPassword,
  role: roles.TEACHER,
 profileModel: "Teacher", // ✅ FIXED
});

    return { teacher, user };
  } catch (error) {
    // rollback teacher if user creation fails
    await Teacher.findByIdAndDelete(teacher._id);

    console.error("🔥 USER CREATE ERROR:", error); // IMPORTANT DEBUG

    throw new AppError(error.message || "Failed to create user account", 500);
  }
};

// ➕ GET ALL TEACHERS
export const getAllTeachersService = async () => {
  return await Teacher.find();
};

// ➕ GET TEACHER BY ID
export const getTeacherByIdService = async (id) => {
  const teacher = await Teacher.findById(id);

  if (!teacher) {
    throw new AppError("Teacher not found", 404);
  }

  return teacher;
};

// ➕ UPDATE TEACHER
export const updateTeacherService = async (id, data) => {
  const teacher = await Teacher.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  }); 

  if (!teacher) {
    throw new AppError("Teacher not found", 404);
  }

  return teacher;
};

// ➕ DELETE TEACHER
export const deleteTeacherService = async (id) => {
  const teacher = await User.findOneAndDelete({
  profile: teacher._id, // ✅ FIXED
});

  if (!teacher) {
    throw new AppError("Teacher not found", 404);
  } 


  // Optionally, also delete associated user account
  await User.findOneAndDelete({ profileModel: teacher._id });

  return;
};

