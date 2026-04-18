import express from "express";
import connectDB from "./config/db.js";
import { markAttendance } from "./controller/attendance.controller.js";
import { login } from "./controller/auth.controller.js";
import { createClass } from "./controller/class.controller.js";
import { enrollStudent } from "./controller/enrollment.controller.js";
import { createExam } from "./controller/exam.controller.js";
import { createFeeRecord } from "./controller/fee.controller.js";
import { createParent } from "./controller/parent.controller.js";
import { makePayment } from "./controller/payment.controller.js";
import { addResult } from "./controller/result.controller.js";
import { createStudent } from "./controller/student.controller.js";
import { addStudent } from "./controller/studentController.js";
import { linkStudentParent } from "./controller/studentParent.controller.js";
import { createSubject } from "./controller/subject.controller.js";
import { createTeacher } from "./controller/teacher.controller.js";
import userRouter from "./routes/auth.routes.js";
// import cors from "cors";

const app = express();

// app.use(cors());
app.use(express.json());

app.get("/api/addStudent", addStudent);
app.use("/api/user", userRouter);
app.post("/api/login", login);

app.post("/api/createStudent", createStudent);
app.post("/api/createTeacher", createTeacher);
app.post("/api/createClass", createClass);
app.post("/api/createSubject", createSubject);
app.post("/api/markAttendance", markAttendance);
app.post("/api/enrollStudent", enrollStudent);
app.post("/api/createExam", createExam);
app.post("/api/createFeeRecord", createFeeRecord);
app.post("/api/makePayment", makePayment);
app.post("/api/addResult", addResult);
app.post("/api/createParent", createParent);
app.post("/api/linkStudentParent", linkStudentParent);

connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});