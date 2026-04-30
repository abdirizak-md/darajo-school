import Student from "./modal.js";
import User from "../user/modal.js";
import { hashPassword } from "../../common/utils/hashPassword.js";
import AppError from "../../common/utils/appError.js";
import roles from "../../common/constant/roles.js";

// ➕ CREATE STUDENT + USER
export const createStudentService = async (data) => {
  const {
    fullName,
    admissionNumber,
    password,
    gender,
    birthDate,
    classId,
    sectionId,
    parentId,
    emergencyContact,
    medicalInfo,
  } = data;

  // 1. validation
  if (!fullName || !admissionNumber  || !classId || !sectionId || !parentId) {
    throw new AppError("Missing required fields", 400);
  }

  // 2. check duplicate user
  const existingUser = await User.findOne({
    identifier: admissionNumber,
  });

  if (existingUser) {
    throw new AppError("Student already exists", 409);
  }

  // 3. hash password
  const hashedPassword = await hashPassword(password);

  // 4. create student
  const student = await Student.create({
    fullName,
    admissionNumber,
    password,
    gender,
      birthDate,
      classId,
    sectionId,
    parentId,
    emergencyContact,
    medicalInfo,
  });

  // 5. create user (AUTO LOGIN ACCOUNT)
  const user = await User.create({
    name: fullName,
    identifier: admissionNumber,
    password: hashedPassword,
    role: roles.STUDENT,
    profile: student._id,
  });

  return { student, user };
};

// 📄 GET ALL
export const getStudentsService = async () => {
  return await Student.find()
    .populate("classId sectionId parentId")
    .lean();
};

// 🔍 GET ONE
export const getStudentByIdService = async (id) => {
  return await Student.findById(id)
    .populate("classId sectionId parentId")
    .lean();
};

// ✏️ UPDATE
export const updateStudentService = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// ❌ DELETE
export const deleteStudentService = async (id) => {
  return await Student.findByIdAndDelete(id);
};