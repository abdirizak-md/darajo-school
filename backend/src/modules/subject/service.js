import Subject from "./modal.js";
import { SUBJECT_MESSAGES } from "../../common/constant/subject.js";

// ➕ CREATE
export const createSubjectService = async (data) => {
  const exists = await Subject.findOne({
    $or: [{ name: data.name }, { code: data.code }],
  });

  if (exists) {
    throw new Error(SUBJECT_MESSAGES.EXISTS);
  }

  return await Subject.create(data);
};

// 📄 GET ALL
export const getSubjectsService = async (query = {}) => {
  const { page = 1, limit = 10 } = query;

  const data = await Subject.find()
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();

  const total = await Subject.countDocuments();

  return {
    total,
    page: Number(page),
    limit: Number(limit),
    data,
  };
};

// 🔍 GET ONE
export const getSubjectByIdService = async (id) => {
  const data = await Subject.findById(id).lean();

  if (!data) throw new Error(SUBJECT_MESSAGES.NOT_FOUND);

  return data;
};

// ✏️ UPDATE
export const updateSubjectService = async (id, payload) => {
  const updated = await Subject.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updated) throw new Error(SUBJECT_MESSAGES.NOT_FOUND);

  return updated;
};

// ❌ DELETE
export const deleteSubjectService = async (id) => {
  const deleted = await Subject.findByIdAndDelete(id);

  if (!deleted) throw new Error(SUBJECT_MESSAGES.NOT_FOUND);

  return deleted;
};