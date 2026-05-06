import Parent from "../models/Parent.js";

export const createParent = async (req, res) => {
  try {
    const parent = new Parent(req.body);
    await parent.save();
    res.status(201).json({ message: "Parent created successfully", parent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getParents = async (req, res) => {
  try {
    const parents = await Parent.find();
    res.json(parents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getParentById = async (req, res) => {
  try {
    const parent = await Parent.findById(req.params.id);
    if (!parent) return res.status(404).json({ message: "Parent not found" });
    res.json(parent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateParent = async (req, res) => {
  try {
    const parent = await Parent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!parent) return res.status(404).json({ message: "Parent not found" });
    res.json({ message: "Parent updated successfully", parent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteParent = async (req, res) => {
  try {
    const parent = await Parent.findByIdAndDelete(req.params.id);
    if (!parent) return res.status(404).json({ message: "Parent not found" });
    res.json({ message: "Parent deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};