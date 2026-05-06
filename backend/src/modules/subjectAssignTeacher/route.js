import express from "express";
import {
  assignSubject,
  getAssignedSubjects,
  getAssignedSubject,
  deleteAssignedSubject,
  getAssignedStudents,
} from "./controller.js";
import authMiddleware from "../../common/middlewares/middlewares.js";

const router = express.Router();

router.post("/", 
  // authMiddleware,
   assignSubject); 
   // ✅ MUST be function
router.get("/", getAssignedSubjects);
router.get("/:id", getAssignedSubject);
router.delete("/:id", deleteAssignedSubject);
router.get("/students/assigned", getAssignedStudents);

export default router;