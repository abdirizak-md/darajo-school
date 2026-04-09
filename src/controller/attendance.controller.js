import Attendance from "../models/Attendance.js";
    
export const markAttendance = async (req, res) => {
  const record = await Attendance.create(req.body);
  res.status(201).json(record);
};

export const getAttendanceByDate = async (req, res) => {
  const { date } = req.query;

  const records = await Attendance.find({
    date: new Date(date)
  }).populate("studentId");

  res.json(records);
};