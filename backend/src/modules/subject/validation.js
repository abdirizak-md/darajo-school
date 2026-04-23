export const validateCreateSubject = (req, res, next) => {
  const { name, code } = req.body || {};

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Subject name is required",
    });
  }

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Subject code is required",
    });
  }

  next();
};