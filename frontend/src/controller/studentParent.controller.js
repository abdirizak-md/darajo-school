import StudentParent from "../models/StudentParent.js";

export const linkStudentParent = async (req, res) => {
  try {
    const link = new StudentParent(req.body);
    await link.save();
    res.status(201).json({ message: "Student linked to parent successfully", link });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllLinks = async (req, res) => {
  try {
    const links = await StudentParent.find()
      .populate("student")
      .populate("parent");
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getLinkById = async (req, res) => {
  try {
    const link = await StudentParent.findById(req.params.id)
      .populate("student")
      .populate("parent");
    if (!link) return res.status(404).json({ message: "Link not found" });
    res.json(link);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateLink = async (req, res) => {
  try {
    const link = await StudentParent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!link) return res.status(404).json({ message: "Link not found" });
    res.json({ message: "Link updated successfully", link });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteLink = async (req, res) => {
  try {
    const link = await StudentParent.findByIdAndDelete(req.params.id);
    if (!link) return res.status(404).json({ message: "Link not found" });
    res.json({ message: "Link deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};