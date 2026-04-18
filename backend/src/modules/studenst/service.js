import Student from "./student.model.js";

export const createStudent = (data) => Student.create(data);

export const getStudents = () =>
  Student.find().populate("classId");

export const getStudentById = (id) =>
  Student.findById(id).populate("classId");

export const updateStudent = (id, data) =>
  Student.findByIdAndUpdate(id, data, { new: true });

export const deleteStudent = (id) =>
  Student.findByIdAndDelete(id);