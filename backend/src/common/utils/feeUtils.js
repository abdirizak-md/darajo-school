import Fee from "./modal.js";
import FeeStructure from "../feeStructure/modal.js";
import Student from "../student/modal.js";

export const getStudentFeeSummary = async (studentId) => {

  const student = await Student.findById(studentId);

  const structures = await FeeStructure.find({
    classId: student.classId
  });

  const totalFee = structures.reduce((sum, f) => sum + f.amount, 0);

  const payments = await Fee.find({ studentId });

  const paid = payments.reduce((sum, p) => sum + p.amount, 0);

  return {
    totalFee,
    paid,
    remaining: totalFee - paid,
  };
};