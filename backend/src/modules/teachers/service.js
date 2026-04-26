import Teacher from "./modal.js";

// ➕ CREATE
export const createTeacherService = async (data) => {
  return await Teacher.create(data);
};

// 📄 GET ALL
export const getTeachersService = async () => {
  return await Teacher.find().lean();
};

// 🔍 GET ONE
export const getTeacherByIdService = async (id) => {
  return await Teacher.findById(id).lean();
};

// ✏️ UPDATE
export const updateTeacherService = async (id, data) => {
  return await Teacher.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// ❌ DELETE
export const deleteTeacherService = async (id) => {
  return await Teacher.findByIdAndDelete(id);
};