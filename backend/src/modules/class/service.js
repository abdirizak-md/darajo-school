import Class from "./modal.js";
import { CLASS_MESSAGES } from "../../common/constant/constant.js";

// ➕ CREATE
export const createClassService = async (data) => {
  const exists = await Class.findOne({ name: data.name });

  if (exists) {
    throw new Error(CLASS_MESSAGES.EXISTS);
  }

  return await Class.create(data);
};

// 📄 GET ALL (SAFE POPULATE)
export const getClassesService = async (query = {}) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  const data = await Class.find()
    .populate({
      path: "teacherId",
      select: "fullName email phone",
      strictPopulate: false, // ✅ prevents crash
    })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  const total = await Class.countDocuments();

  return {
    total,
    page,
    limit,
    data,
  };
};

// 🔍 GET ONE (SAFE POPULATE)
export const getClassByIdService = async (id) => {
  const data = await Class.findById(id)
    .populate({
      path: "teacherId",
      select: "fullName email phone",
      strictPopulate: false, // ✅ prevents crash
    })
    .lean();

  if (!data) throw new Error(CLASS_MESSAGES.NOT_FOUND);

  return data;
};

// ✏️ UPDATE
export const updateClassService = async (id, payload) => {
  const updated = await Class.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updated) throw new Error(CLASS_MESSAGES.NOT_FOUND);

  return updated;
};

// ❌ DELETE
export const deleteClassService = async (id) => {
  const deleted = await Class.findByIdAndDelete(id);

  if (!deleted) throw new Error(CLASS_MESSAGES.NOT_FOUND);

  return deleted;
};