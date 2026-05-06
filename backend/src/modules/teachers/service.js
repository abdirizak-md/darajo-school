import Teacher from "./modal.js";
import User from "../user/modal.js";

import roles from "../../common/constant/roles.js";
import { hashPassword } from "../../common/utils/hashPassword.js";
import AppError from "../../common/utils/appError.js";


export const createTeacherService = async (data) => {
  const { fullName, email, password, employeeId, gender, phone, address } = data;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("Teacher already exists", 400);
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    name: fullName,
    email,
    password: hashedPassword,
    role: roles.TEACHER,
    roleModel: "Teacher",
    identifier: employeeId || email, // ✅ FIXED
  });

  const teacher = await Teacher.create({
    fullName,
    employeeId,
    gender,
    phone,
    address,
    user: user._id,
  });

  user.profile = teacher._id;
  await user.save();

  return { user, teacher };
};

export const getAllTeachersService = async () => {
  return await Teacher.find()
    .populate("user", "name email role")
    .lean();
};

export const getTeacherByIdService = async (id) => {
  const teacher = await Teacher.findById(id).populate(
    "user",
    "name email role"
  );

  if (!teacher) {
    throw new AppError("Teacher not found", 404);
  }

  return teacher;
};

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

export const deleteTeacherService = async (id) => {
  const teacher = await Teacher.findById(id);


  if (!teacher) {
    throw new AppError("Teacher not found", 404);
  }

  // delete linked user first
  await User.findByIdAndDelete(teacher.user);
  // delete teacher  await Teacher.findByIdAndDelete(id);
  await Teacher.findByIdAndDelete(id);
};

