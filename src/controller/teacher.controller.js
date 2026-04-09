import Teacher from "../models/Teacher.js"; 

export const createTeacher = async (req, res) => {
  const teacher = await Teacher.create(req.body);
  res.status(201).json(teacher);
};

export const getTeachers = async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
};

export const updateTeacher = async (req, res) => {
  const teacher = await Teacher.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(teacher);
};

export const deleteTeacher = async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: "Teacher deleted" });
};