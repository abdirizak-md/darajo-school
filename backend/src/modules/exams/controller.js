import {asyncHandler} from "../../common/utils/asyncHandler.js";
import apiResponse from "../../common/utils/responseApi.js";
import * as examService from "./service.js";

import examMessages from "../../common/constant/exam.js";
import statusCodes from "../../common/constant/statusCode.js";

export const createExam = asyncHandler(async (req, res) => {
  const exam = await examService.createExam(req.body);

  return apiResponse(res, {
    success: true,
    message: examMessages.CREATED,
    statusCode: statusCodes.CREATED,
    data: exam,
  });
});

export const getExams = asyncHandler(async (req, res) => {
  const exams = await examService.getExams();

  return apiResponse(res, {
    success: true,
    message: examMessages.FETCHED,
    statusCode: statusCodes.SUCCESS,
    data: exams,
  });
});

export const updateExam = asyncHandler(async (req, res) => {
  const exam = await examService.updateExam(req.params.id, req.body);

  return apiResponse(res, {
    success: true,
    message: examMessages.UPDATED,
    statusCode: statusCodes.SUCCESS,
    data: exam,
  });
});

export const deleteExam = asyncHandler(async (req, res) => {
  await examService.deleteExam(req.params.id);

  return apiResponse(res, {
    success: true,
    message: examMessages.DELETED,
    statusCode: statusCodes.SUCCESS,
  });
}); 