import Class from "../models/Class.js";

export const createClass = async (req, res) => {
  const cls = await Class.create(req.body);
  res.status(201).json(cls);
};

export const getClasses = async (req, res) => {
  const classes = await Class.find().populate("classTeacherId");
  res.json(classes);
};

export const updateClass = async (req, res) => {
  const cls = await Class.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(cls);
};

export const deleteClass = async (req, res) => {
  await Class.findByIdAndDelete(req.params.id);
  res.json({ message: "Class deleted" });
};