export const validateCreateParent = (req, res, next) => {
  const { fullName, phone, email, password } = req.body;

  if (!fullName || !phone || !password) {
    return res.status(400).json({
      success: false,
      message: "fullName, phone and password are required",
    });
  }

  next();
};




  // // ✅ Required fields
  // if (!fullName || !phone) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "fullName and phone are required",
  //   });
  // }

  // // ✅ fullName check
  // if (fullName.trim().length < 3) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "fullName must be at least 3 characters",
  //   });
  // }

  // // ✅ phone check (simple numeric validation)
  // if (!/^\d{9,15}$/.test(phone)) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "phone must be 9–15 digits",
  //   });
  // }

  // // ✅ email check (optional)
  // if (email && !/^\S+@\S+\.\S+$/.test(email)) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Invalid email format",
  //   });
  // }
