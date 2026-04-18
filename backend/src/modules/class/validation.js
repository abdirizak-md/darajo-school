export const validateCreateClass = (req, res, next) => {
  const { name, section } = req.body;

  if (!name || !section) {
    return res.status(400).json({
      success: false,
      message: "Name and section are required",
    });
  }

  next();
};