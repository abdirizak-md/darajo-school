import * as feeTypeService from "./service.js";
import {asyncHandler} from "../../../common/utils/asyncHandler.js";
import apiResponse from "../../../common/utils/responseApi.js";

export const createFeeType = asyncHandler(async (req, res) => {
  const feeType = await feeTypeService.createFeeType(req.body);
  return apiResponse(res, 201, "Fee type created", feeType);
});

export const getFeeTypes = asyncHandler(async (req, res) => {
  const data = await feeTypeService.getFeeTypes();
  return apiResponse(res, 200, "Fee types fetched", data);
});

export const getFeeType = asyncHandler(async (req, res) => {
  const data = await feeTypeService.getFeeTypeById(req.params.id);
  return apiResponse(res, 200, "Fee type fetched", data);
});

export const updateFeeType = asyncHandler(async (req, res) => {
  const updated = await feeTypeService.updateFeeType(req.params.id, req.body);
  return apiResponse(res, 200, "Fee type updated", updated);
});

export const deleteFeeType = asyncHandler(async (req, res) => {
  await feeTypeService.deleteFeeType(req.params.id);
  return apiResponse(res, 200, "Fee type deleted");
});