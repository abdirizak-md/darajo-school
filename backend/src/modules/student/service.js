import Student from "./modal.js";
import Parent from "../parents/modal.js";

/**
 * ➕ CREATE STUDENT
 * - find or create parent
 * - assign parentId
 */
export const createStudentService = async (data) => {
  const {
    parentName,
    parentPhone,
    email,
    address,
    ...studentData
  } = data;

  // 🔍 1. Check if parent exists
  let parent = await Parent.findOne({ phone: parentPhone });

  // ➕ 2. Create parent if not exists
  if (!parent) {
    parent = await Parent.create({
      fullName: parentName,
      phone: parentPhone,
      email,
      address,
    });
  }

  // 🎓 3. Create student
  const student = await Student.create({
    ...studentData,
    parentId: parent._id,
  });

  return student;
};

/**
 * 📄 GET ALL STUDENTS
 */
export const getStudentsService = async (query = {}) => {
  const { page = 1, limit = 10 } = query;

  const students = await Student.find()
    .populate("parentId", "fullName phone")
    .populate("sectionId", "name")
    .populate("classId", "name")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();

  const total = await Student.countDocuments();

  return {
    total,
    page: Number(page),
    limit: Number(limit),
    data: students,
  };
};

/**
 * 🔍 GET ONE STUDENT
 */
export const getStudentByIdService = async (id) => {
  const student = await Student.findById(id)
    .populate("parentId", "fullName phone email address")
    .populate("sectionId", "name")
    .populate("classId", "name")
    .lean();

  if (!student) {
    throw new Error("Student not found");
  }

  return student;
};

/**
 * ✏️ UPDATE STUDENT
 */
export const updateStudentService = async (id, payload) => {
  const updated = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updated) {
    throw new Error("Student not found");
  }

  return updated;
};

/**
 * ❌ DELETE STUDENT
 */
export const deleteStudentService = async (id) => {
  const deleted = await Student.findByIdAndDelete(id);

  if (!deleted) {
    throw new Error("Student not found");
  }

  return deleted;
};