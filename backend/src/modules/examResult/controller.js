import {asyncHandler} from "../../common/utils/asyncHandler.js";
import apiResponse from "../../common/utils/responseApi.js";

import * as resultService from "./service.js";
import resultMessages from "../../common/constant/examResult.js";

import statusCodes from "../../common/constant/statusCode.js";

export const createResult = asyncHandler(async (req, res) => {
  const result = await resultService.createResult(req.body);

  return apiResponse(res, {
    success: true,
    message: resultMessages.CREATED,
    statusCode: statusCodes.CREATED,
    data: result,
  });
});

export const getResults = asyncHandler(async (req, res) => {
  const results = await resultService.getResults();

  return apiResponse(res, {
    success: true,
    message: resultMessages.FETCHED,
    statusCode: statusCodes.SUCCESS,
    data: results,
  });
});

export const getStudentResults = asyncHandler(async (req, res) => {
  const results = await resultService.getStudentResults(req.params.studentId);

  return apiResponse(res, {
    success: true,
    message: resultMessages.FETCHED,
    statusCode: statusCodes.SUCCESS,
    data: results,
  });
});

export const updateResult = asyncHandler(async (req, res) => {
  const result = await resultService.updateResult(req.params.id, req.body);

  return apiResponse(res, {
    success: true,
    message: resultMessages.UPDATED,
    statusCode: statusCodes.SUCCESS,
    data: result,
  });
});

export const deleteResult = asyncHandler(async (req, res) => {
  await resultService.deleteResult(req.params.id);

  return apiResponse(res, {
    success: true,
    message: resultMessages.DELETED,
    statusCode: statusCodes.SUCCESS,
  });
});


export const getStudentCGPA = asyncHandler(async (req, res) => {
  const cgpa = await resultService.calculateStudentCGPA(
    req.params.studentId
  );

  return apiResponse(res, {
    success: true,
    message: "CGPA fetched successfully",
    statusCode: statusCodes.SUCCESS,
    data: { cgpa },
  });
});