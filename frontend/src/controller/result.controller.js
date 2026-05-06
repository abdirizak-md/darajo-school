import Result from "../models/Result.js";

export const addResult = async (req, res) => {
  const result = await Result.create(req.body);
  res.status(201).json(result);
};

export const getStudentResults = async (req, res) => {
  const results = await Result.find({
    studentId: req.params.studentId
  })
    .populate("subjectId")
    .populate("examId");

  res.json(results);
};