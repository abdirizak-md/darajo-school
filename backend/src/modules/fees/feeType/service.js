import FeeType from "./modal.js";

export const createFeeType = async (data) => {
  return await FeeType.create(data);
};

export const getFeeTypes = async () => {
  return await FeeType.find();
};

export const getFeeTypeById = async (id) => {
  return await FeeType.findById(id);
};

export const updateFeeType = async (id, data) => {
  return await FeeType.findByIdAndUpdate(id, data, { new: true });
};

export const deleteFeeType = async (id) => {
  return await FeeType.findByIdAndDelete(id);
};