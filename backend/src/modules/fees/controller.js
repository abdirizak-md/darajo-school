// import * as feeService from "./service.js";
// import asyncHandler from "../../common/utils/asyncHandler.js";
// import apiResponse from "../../common/utils/responseApi.js";

// export const createFee = asyncHandler(async (req, res) => {
//   const fee = await feeService.createFee(req.body);
//   return apiResponse(res, 201, "Payment recorded successfully", fee);
// });

// export const getFees = asyncHandler(async (req, res) => {
//   const fees = await feeService.getFees();
//   return apiResponse(res, 200, "Fees fetched", fees);
// });

// export const getFee = asyncHandler(async (req, res) => {
//   const fee = await feeService.getFeeById(req.params.id);
//   return apiResponse(res, 200, "Fee fetched", fee);
// });

// export const updateFee = asyncHandler(async (req, res) => {
//   const updated = await feeService.updateFee(req.params.id, req.body);
//   return apiResponse(res, 200, "Fee updated", updated);
// });

// export const deleteFee = asyncHandler(async (req, res) => {
//   await feeService.deleteFee(req.params.id);
//   return apiResponse(res, 200, "Fee deleted");
// });