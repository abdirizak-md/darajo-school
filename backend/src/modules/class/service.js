import Class from "./modal.js";
import { CLASS_MESSAGES } from "../../common/constant/constant.js";

// ➕ CREATE
export const createClassService = async (data) => {
  const exists = await Class.findOne({
    name: data.name,
    section: data.section,
  });

  if (exists) {
    throw new Error(CLASS_MESSAGES.EXISTS);
  }

  return await Class.create(data);
};

// 📄 GET ALL
export const getClassesService = async (query = {}) => {
  const { page = 1, limit = 10 } = query;

  const data = await Class.find()
    .populate("teacherId", "sectionId")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();

  const total = await Class.countDocuments();

  return {
    total,
    page: Number(page),
    limit: Number(limit),
    data,
  };
};

// 🔍 GET ONE
export const getClassByIdService = async (id) => {
  const data = await Class.findById(id)
    .populate("teacherId", "name subject")
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