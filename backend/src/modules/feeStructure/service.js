import FeeStructure from "./modal.js";

// CREATE
export const createFeeStructureService = async (data) => {
  return await FeeStructure.create({
    class: data.class,
    feeType: data.feeType,
    amount: data.amount,
    dueDate: data.dueDate,
  });
};

export const getAllFeeStructuresService = async () => {
  return await FeeStructure.find()
    .populate("class", "name");
};

export const getFeeStructureByClassService = async (classId) => {
  return await FeeStructure.find({ class: classId })
    .populate("class", "name");
};