import Teacher from "./modal.js";

// ➕ CREATE
export const createTeacherService = async (data) => {
  return await Teacher.create(data);
};

// 📄 GET ALL
export const getTeachersService = async () => {
  return await Teacher.find()
    .populate("classIds", "name")
    .populate("sectionIds", "name")
    .lean();
};

// 🔍 GET ONE
export const getTeacherByIdService = async (id) => {
  return await Teacher.findById(id)
    .populate("classIds", "name")
    .populate("sectionIds", "name")
    .lean();
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