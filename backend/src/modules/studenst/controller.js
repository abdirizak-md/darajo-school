import * as service from "./student.service.js";

export const createStudent = async (req, res) => {
  const student = await service.createStudent(req.body);
  res.status(201).json(student);
};

export const getStudents = async (req, res) => {
  const students = await service.getStudents();
  res.json(students);
};

export const getStudent = async (req, res) => {
  const student = await service.getStudentById(req.params.id);
  res.json(student);
};

export const updateStudent = async (req, res) => {
  const student = await service.updateStudent(req.params.id, req.body);
  res.json(student);
};

export const deleteStudent = async (req, res) => {
  await service.deleteStudent(req.params.id);
  res.json({ message: "Deleted successfully" });
};