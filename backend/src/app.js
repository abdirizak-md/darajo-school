import express from "express";
import routeAssign from "./routes/assignTeacher.js";
import routeAtten from "./routes/attendance.js";
import routersCommunication from "./routes/communication.js";
import routersEntryMark from "./routes/entryMark.js";
import examRoute from "./routes/exam.js";
import router from "./routes/index.js";
import ParentRouter from "./routes/parent.js";
import examResults from "./routes/resultExam.js";
import routerSchedule from "./routes/schedule.js";
import SectionRouter from "./routes/section.js";
import StudentRouter from "./routes/studentRoute.js";
import SubjectRouter from "./routes/subject.js";
import TeacherRouter from "./routes/teacher.js";
import routerUsers from "./routes/users.js";


import cors from "cors";
import routerFees from "./routes/fees.js";

const app = express();

app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);



app.use("/api", router);
app.use("/api", StudentRouter);
app.use("/api", SectionRouter);
app.use("/api", TeacherRouter);
app.use("/api", ParentRouter);
app.use("/api", SubjectRouter);
app.use("/api", routeAtten);
app.use("/api", routerUsers);
app.use('/api', examRoute)
app.use('/api', examResults)
app.use('/api', routeAssign)
app.use('/api', routersEntryMark)
app.use('/api', routersCommunication)
app.use('/api', routerSchedule)
app.use('/api', routerFees)



app.get("/", (req, res) => {
  res.send("School Management API 🚀");
});

export default app;