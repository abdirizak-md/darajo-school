import mongoose from "mongoose";
import SubjectAssign from "./modal.js";
import Student from "../student/modal.js";
import User from "../user/modal.js";
import { SUBJECT_ASSIGN_MESSAGES } from "../../common/constant/jubjectAssign.js";

const toObjectId = (id) => {
  if (!id) return null;
  return new mongoose.Types.ObjectId(id);
};
export const assignSubjectService = async (data) => {
  const { subjectId, classId, sectionId, teacherId } = data;

  if (!subjectId || !classId || !sectionId || !teacherId) {
    throw new Error("subjectId, classId, sectionId, teacherId are required");
  }

  const payload = {
    subjectId,
    classId,
    sectionId,
    teacherId,
  };

  const exists = await SubjectAssign.findOne(payload);

  if (exists) {
    throw new Error("Assignment already exists");
  }

  return await SubjectAssign.create(payload);
};


export const getAssignedSubjectsService = async (query = {}) => {
  const { page = 1, limit = 10, classId, subjectId } = query;

  const filter = {};

  if (classId) filter.classId = toObjectId(classId);
  if (subjectId) filter.subjectId = toObjectId(subjectId);

  const data = await SubjectAssign.find(filter)
    .populate("subjectId", "name")
    .populate("classId", "name")
    .populate("sectionId", "name")
    .populate("teacherId", "name email")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .lean();

  const total = await SubjectAssign.countDocuments(filter);

  return {
    success: true,
    total,
    page: Number(page),
    limit: Number(limit),
    data: cleanData,
  };
};


export const getAssignedSubjectByIdService = async (id) => {
  if (!id) throw new Error("ID is required");

  const data = await SubjectAssign.findById(toObjectId(id))
    .populate("subjectId", "name")
    .populate("classId", "name")
    .populate("sectionId", "name")
    .populate("teacherId", "name email")
    .lean();

  if (!data) {
    throw new Error(SUBJECT_ASSIGN_MESSAGES.NOT_FOUND);
  }

  return data;
};

export const getAssignedStudentsService = async (query, user) => {
  const { classId, subjectId, sectionId } = query;

  if (!classId || !subjectId || !sectionId) {
    throw new Error("classId, subjectId and sectionId are required");
  }

  const teacherId = user.profileId; // 🔥 FIXED

  const assignment = await SubjectAssign.findOne({
    teacherId: toObjectId(teacherId),
    subjectId: toObjectId(subjectId),
    classId: toObjectId(classId),
    sectionId: toObjectId(sectionId),
  });

  if (!assignment) {
    throw new Error("You are not assigned to this class/subject/section");
  }

  return await Student.find({
    classId: toObjectId(classId),
    sectionId: toObjectId(sectionId),
  }).select("fullName admissionNumber");
};