import * as service from "./service.js";
import {asyncHandler} from "../../common/utils/asyncHandler.js";
import apiResponse from "../../common/utils/responseApi.js";

export const createFee = asyncHandler(async (req, res) => {
  const fee = await service.createFee(req.body, req.user.id);

  res.json(apiResponse(true, "Fee created successfully", fee));
});

export const getFees = asyncHandler(async (req, res) => {
  const fees = await service.getFees(req.query);

  res.json(apiResponse(true, "Fees fetched", fees));
});

export const getFee = asyncHandler(async (req, res) => {
  const fee = await service.getFeeById(req.params.id);

  res.json(apiResponse(true, "Fee fetched", fee));
});

export const updateFee = asyncHandler(async (req, res) => {
  const fee = await service.updateFee(req.params.id, req.body);

  res.json(apiResponse(true, "Fee updated", fee));
});

export const deleteFee = asyncHandler(async (req, res) => {
  await service.deleteFee(req.params.id);

  res.json(apiResponse(true, "Fee deleted"));
});

export const studentSummary = asyncHandler(async (req, res) => {
  const summary = await service.getStudentFeeSummary(
    req.params.studentId
  );

  res.json(apiResponse(true, "Summary fetched", summary));
});