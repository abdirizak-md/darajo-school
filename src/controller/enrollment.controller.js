import Enrollment from "../models/Enrollment.js";

export const enrollStudent = async (req, res) => {
  const enrollment = await Enrollment.create(req.body);
  res.status(201).json(enrollment);
};

export const getEnrollments = async (req, res) => {
  const data = await Enrollment.find()
    .populate("studentId")
    .populate("classId");
  res.json(data);
};