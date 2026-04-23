import Student from "./modal.js";
import Parent from "../parents/modal.js";

/**
 * ➕ CREATE STUDENT
 */
export const createStudentService = async (data) => {
  const {
    parentName,
    parentPhone,
    email,
    address,
    ...studentData
  } = data;

  // ✅ validation
  if (!studentData.classId || !studentData.sectionId) {
    throw new Error("classId and sectionId are required");
  }

  // 🔍 find parent safely
  let parent = null;

  if (parentPhone) {
    parent = await Parent.findOne({ phone: parentPhone });

    if (!parent) {
      parent = await Parent.create({
        fullName: parentName,
        phone: parentPhone,
        email,
        address,
      });
    }
  }

  // 🎓 create student
  const student = await Student.create({
    ...studentData,
    parentId: parent ? parent._id : null,
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
 * 🔍 GET ONE
 */
export const getStudentByIdService = async (id) => {
  const student = await Student.findById(id)
    .populate("parentId", "fullName phone email address")
    .populate("sectionId", "name")
    .populate("classId", "name")
    .lean();

  if (!student) throw new Error("Student not found");

  return student;
};

/**
 * ✏️ UPDATE
 */
export const updateStudentService = async (id, payload) => {
  const updated = await Student.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updated) throw new Error("Student not found");

  return updated;
};

/**
 * ❌ DELETE
 */
export const deleteStudentService = async (id) => {
  const deleted = await Student.findByIdAndDelete(id);

  if (!deleted) throw new Error("Student not found");

  return deleted;
};