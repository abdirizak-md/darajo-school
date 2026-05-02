export const validateCreateFeeType = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Fee type name is required",
    });
  }

  next();
};

export const validateUpdateFeeType = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Fee type ID is required",
    });
  }

  next();
};