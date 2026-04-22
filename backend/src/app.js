import express from "express";
import router from "./routes/index.js";
import StudentRouter from "./routes/studentRoute.js";
import SectionRouter from "./routes/section.js";
import TeacherRouter from "./routes/teacher.js";
import ParentRouter from "./routes/parent.js";
import cors from "cors";

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


app.get("/", (req, res) => {
  res.send("School Management API 🚀");
});

export default app;