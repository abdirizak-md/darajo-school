import {asyncHandler} from "../../common/utils/asyncHandler.js";
import apiResponse from "../../common/utils/responseApi.js";
import * as marksService from "./service.js";
import statusCodes from "../../common/constant/statusCode.js";

// Load students
export const getStudentsForMarksEntry = asyncHandler(async (req, res) => {
  const { classId, sectionId } = req.query;

  const students = await marksService.getStudentsForMarksEntry({
    classId,
    sectionId,
    teacherId: req.user.id,
  });

  return apiResponse(res, {
    success: true,
    message: "Students loaded",
    statusCode: statusCodes.SUCCESS,
    data: students,
  });
});

// Save marks
export const saveMarks = asyncHandler(async (req, res) => {
  const result = await marksService.saveMarks(req.body, req.user);

  return apiResponse(res, {
    success: true,
    message: "Marks saved successfully",
    statusCode: statusCodes.CREATED,
    data: result,
  });
});