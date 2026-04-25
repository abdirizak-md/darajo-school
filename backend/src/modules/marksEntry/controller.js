import asyncHandler from "../../common/utils/asyncHandler.js";
import apiResponse from "../../common/utils/apiResponse.js";

import * as marksService from "./marksEntry.service.js";
import statusCodes from "../../common/constants/statusCodes.js";

// 1. Load students
export const getStudentsForMarksEntry = asyncHandler(async (req, res) => {
  const { classId, sectionId } = req.query;

  const students = await marksService.getStudentsForMarksEntry({
    classId,
    sectionId,
  });

  return apiResponse(res, {
    success: true,
    message: "Students loaded",
    statusCode: statusCodes.SUCCESS,
    data: students,
  });
});

// 2. Save marks (bulk)
export const saveMarks = asyncHandler(async (req, res) => {
  const result = await marksService.saveMarks(req.body);

  return apiResponse(res, {
    success: true,
    message: "Marks saved successfully",
    statusCode: statusCodes.CREATED,
    data: result,
  });
});