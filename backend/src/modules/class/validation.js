export const validateCreateClass = (req, res, next) => {
  const { name, sectionId, teacherId } = req.body || {}; // ✅ safe

  if (!name || !sectionId || !teacherId) {
    return res.status(400).json({
      success: false,
      message: "Name, section, and teacher ID are required",
    });
  }

  next();
};