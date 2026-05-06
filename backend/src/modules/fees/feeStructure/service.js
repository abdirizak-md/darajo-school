import FeeStructure from "./modal.js";

export const createFeeStructure = async (data) => {
  return await FeeStructure.create(data);
};

export const getFeeStructures = async () => {
  return await FeeStructure.find().populate("classId feeTypeId");
};

export const getFeeStructureById = async (id) => {
  return await FeeStructure.findById(id);
};

export const updateFeeStructure = async (id, data) => {
  return await FeeStructure.findByIdAndUpdate(id, data, { new: true });
};

export const deleteFeeStructure = async (id) => {
  return await FeeStructure.findByIdAndDelete(id);
};