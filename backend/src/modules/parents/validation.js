export const validateCreateParent = (req, res, next) => {
  const { fullName, phone, email } = req.body || {};

  // 🔹 Required fields
  if (!fullName || !phone) {
    return res.status(400).json({
      success: false,
      message: "Full name and phone are required",
    });
  }

  // 🔹 Full name validation
  if (typeof fullName !== "string" || fullName.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: "Full name must be at least 3 characters",
    });
  }

  // 🔹 Phone validation (basic)
  const phoneRegex = /^[0-9]{9,15}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Phone number must be 9–15 digits",
    });
  }

  // 🔹 Email validation (optional)
  if (email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }
  }

  next();
};