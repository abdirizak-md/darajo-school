import Parent from "./modal.js";
import Student from "../student/modal.js"; // ✅ FIX: missing import

// ➕ CREATE
export const createParentService = async (data) => {
  return await Parent.create(data);
};

// 📄 GET ALL (with students)
export const getParentsService = async () => {
  const parents = await Parent.find().lean();

  const result = await Promise.all(
    parents.map(async (parent) => {
      const students = await Student.find({
        parentId: parent._id,
      })
        .select("fullName admissionNumber")
        .lean();

      return { ...parent, students };
    })
  );

  return result;
};

// 🔍 GET ONE
export const getParentByIdService = async (id) => {
  const parent = await Parent.findById(id).lean();

  if (!parent) throw new Error("Parent not found");

  const students = await Student.find({
    parentId: id,
  })
    .select("fullName admissionNumber")
    .lean();

  return { ...parent, students };
};

// ✏️ UPDATE
export const updateParentService = async (id, data) => {
  const updated = await Parent.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!updated) throw new Error("Parent not found");

  return updated;
};

// ❌ DELETE
export const deleteParentService = async (id) => {
  const deleted = await Parent.findByIdAndDelete(id);

  if (!deleted) throw new Error("Parent not found");

  return deleted;
};