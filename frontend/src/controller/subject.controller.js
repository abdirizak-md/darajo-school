import Subject from "../models/Subject.js";
    
export const createSubject = async (req, res) => {
  const subject = await Subject.create(req.body);
  res.status(201).json(subject);
};

export const getSubjects = async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
};

export const deleteSubject = async (req, res) => {
  await Subject.findByIdAndDelete(req.params.id);
  res.json({ message: "Subject deleted" });
};