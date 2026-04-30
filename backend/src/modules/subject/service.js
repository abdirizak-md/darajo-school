import Subject from "./modal.js";
import { SUBJECT_MESSAGES } from "../../common/constant/subject.js";

// ➕ CREATE
export const createSubjectService = async (data) => {
  try {
    // 🧹 sanitize input
    const name = data.name?.trim();
    const code = data.code?.trim();
    const description = data.description?.trim();
    const status = data.status?.toLowerCase();

    // ❗ required validation
    if (!name || !code) {
      throw new Error("Name and Code are required");
    }

    // 🔍 check duplicate NAME (case-insensitive)
    const nameExists = await Subject.findOne({
      name: { $regex: `^${name}$`, $options: "i" },
    });

    if (nameExists) {
      throw new Error("Subject name already exists");
    }

    // 🔍 check duplicate CODE (case-insensitive)
    const codeExists = await Subject.findOne({
      code: { $regex: `^${code}$`, $options: "i" },
    });

    if (codeExists) {
      throw new Error("Subject code already exists");
    }

    // ✅ create subject
    const subject = await Subject.create({
      name,
      code,
      description,
      status,
    });

    return subject;
  } catch (error) {
    console.log("❌ Create Subject Error:", error);

    // Mongo duplicate fallback
    if (error.code === 11000) {
      throw new Error("Duplicate subject detected");
    }

    throw new Error(error.message || SUBJECT_MESSAGES.CREATE_FAILED);
  }
};

// 📄 GET ALL
export const getSubjectsService = async (query = {}) => {
  try {
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
  } catch (error) {
    console.log("❌ Get Subjects Error:", error);
    throw new Error("Failed to fetch subjects");
  }
};

// 🔍 GET ONE
export const getSubjectByIdService = async (id) => {
  try {
    const data = await Subject.findById(id).lean();

    if (!data) throw new Error(SUBJECT_MESSAGES.NOT_FOUND);

    return data;
  } catch (error) {
    console.log("❌ Get Subject Error:", error);
    throw new Error(error.message || "Failed to fetch subject");
  }
};

// ✏️ UPDATE
export const updateSubjectService = async (id, payload) => {
  try {
    const updated = await Subject.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });

    if (!updated) throw new Error(SUBJECT_MESSAGES.NOT_FOUND);

    return updated;
  } catch (error) {
    console.log("❌ Update Subject Error:", error);
    throw new Error(error.message || "Failed to update subject");
  }
};

// ❌ DELETE
export const deleteSubjectService = async (id) => {
  try {
    const deleted = await Subject.findByIdAndDelete(id);

    if (!deleted) throw new Error(SUBJECT_MESSAGES.NOT_FOUND);

    return deleted;
  } catch (error) {
    console.log("❌ Delete Subject Error:", error);
    throw new Error(error.message || "Failed to delete subject");
  }
};