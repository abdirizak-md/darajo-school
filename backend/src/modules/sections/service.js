import Section from "./modal.js";

// ➕ CREATE SECTION
export const createSectionService = async (data) => {
  return await Section.create(data);
};

// 📄 GET ALL SECTIONS
export const getSectionsService = async () => {
  return await Section.find()
    .populate("classId", "name")
    .populate("classTeacherId", "fullName subject")
    .lean();
};

// 🔍 GET ONE SECTION
export const getSectionByIdService = async (id) => {
  return await Section.findById(id)
    .populate("classId", "name")
    .populate("classTeacherId", "fullName subject")
    .lean();
};

// ✏️ UPDATE SECTION
export const updateSectionService = async (id, data) => {
  return await Section.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// ❌ DELETE SECTION
export const deleteSectionService = async (id) => {
  return await Section.findByIdAndDelete(id);
};