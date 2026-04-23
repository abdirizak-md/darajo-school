export const validateCreateClass = (req, res, next) => {
  const { name, sectionId, teacherId } = req.body || {}; // ✅ safe

  if (!name) {
  return res.status(400).json({
    success: false,
    message: "Class name is required"
  });
}

  next();
};