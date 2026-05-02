import statusCodes from "../../common/constant/statusCode.js";

export const validateCreateFee = (req, res, next) => {
  const {
    student,
    classId,
    section,
    feeType,
    amount,
    paymentMethod,
    date,
  } = req.body;

  if (
    !student ||
    !classId ||
    !section ||
    !feeType ||
    !amount ||
    !paymentMethod ||
    !date
  ) {
    return res.status(statusCodes.BAD_REQUEST).json({
      success: false,
      message: "Required fields missing",
    });
  }

  next();
};