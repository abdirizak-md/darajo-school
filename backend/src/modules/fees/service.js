import Fee from "./modal.js";

export const createFee = async (data, userId) => {
  const fee = await Fee.create({
    ...data,
    createdBy: userId,
  });

  return fee;
};

export const getFees = async (filters) => {
  const query = { deletedAt: null };

  if (filters.student) query.student = filters.student;
  if (filters.classId) query.classId = filters.classId;

  const fees = await Fee.find(query)
    .populate("student classId section feeType")
    .sort({ createdAt: -1 });

  return fees;
};

export const getFeeById = async (id) => {
  return Fee.findById(id).populate(
    "student classId section feeType"
  );
};

export const updateFee = async (id, data) => {
  return Fee.findByIdAndUpdate(id, data, { new: true });
};

export const deleteFee = async (id) => {
  return Fee.findByIdAndUpdate(id, {
    deletedAt: new Date(),
  });
};


// 🔥 Advanced: Student Fee Summary
export const getStudentFeeSummary = async (studentId) => {
  const result = await Fee.aggregate([
    { $match: { student: studentId, deletedAt: null } },
    {
      $group: {
        _id: "$student",
        totalPaid: { $sum: "$amount" },
        count: { $sum: 1 },
      },
    },
  ]);

  return result[0] || { totalPaid: 0, count: 0 };
};